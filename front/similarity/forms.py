from enum import Enum
from django import forms

from .models import Similarity
from shared.forms import FormConfig

from tasking.forms import AbstractTaskOnCropsForm

AVAILABLE_SIMILARITY_ALGORITHMS = {
    "cosine": "Similarity using cosine distance between feature vectors",
    "segswap": "Similarity using correspondence matching between part of images",
}


class BaseFeatureExtractionForm(forms.Form):
    """Base form for feature extraction settings."""

    class Meta:
        fields = ("feat_net",)

    feat_net = forms.ChoiceField(
        label="Feature Extraction Model",
        help_text="Select the model to use for feature extraction",
        widget=forms.Select(attrs={"extra-class": "preprocessing-field"}),
    )
    # # NOTE NOT USED for now
    # cosine_threshold = forms.FloatField(
    #     min_value=0.1,
    #     max_value=0.99,
    #     initial=0.6,
    #     label="Cosine Threshold",
    #     widget=forms.NumberInput(attrs={"extra-class": "preprocessing-field"}),
    # )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["feat_net"].choices = Similarity.get_available_models()


class CosinePreprocessing(BaseFeatureExtractionForm):
    """Form for SegSwap-specific settings."""

    cosine_preprocessing = forms.BooleanField(
        required=False,
        initial=True,
        label="Use Preprocessing",
        help_text="Filter less similar images before running algorithm",
        widget=forms.CheckboxInput(attrs={"class": "use-preprocessing"}),
    )
    cosine_n_filter = forms.IntegerField(
        min_value=2,
        initial=10,
        label="Number of images to keep",
        widget=forms.NumberInput(attrs={"extra-class": "preprocessing-field"}),
    )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.order_fields(
            ["cosine_preprocessing"]
            + list(BaseFeatureExtractionForm.Meta.fields)
            + ["cosine_n_filter"]
        )


class CosineSimilarityForm(BaseFeatureExtractionForm):
    """Form for cosine similarity-specific settings."""

    # # NOTE NOT USED for now
    # top_k = forms.IntegerField(
    #     min_value=1,
    #     max_value=100,
    #     initial=10,
    #     label="Number of similar images to keep",
    #     widget=forms.NumberInput(attrs={"extra-class": "preprocessing-field"}),
    # )
    use_transpositions = forms.BooleanField(
        required=False,
        initial=False,
        label="Use Transpositions",
        help_text="Include transposed images in similarity computation",
        widget=forms.CheckboxInput(attrs={"extra-class": "preprocessing-field"}),
    )


class SegSwapForm(CosinePreprocessing):
    """Form for SegSwap-specific settings."""


class SimilarityAlgorithm(Enum):
    cosine = FormConfig(
        display_name="Cosine Similarity",
        description="Compute similarity using cosine distance",
        form_class=CosineSimilarityForm,
    )
    segswap = FormConfig(
        display_name="SegSwap",
        description="Use segmentation and matching",
        form_class=SegSwapForm,
    )

    @property
    def config(self):
        return self.value

    @classmethod
    def choices(cls):
        return [(algo.name, algo.config.display_name) for algo in cls]


class SimilarityForm(AbstractTaskOnCropsForm):
    """Form for creating similarity analysis tasks."""

    class Meta(AbstractTaskOnCropsForm.Meta):
        model = Similarity
        fields = AbstractTaskOnCropsForm.Meta.fields + ("algorithm",)

    # add default empty value for algorithm
    algorithm = forms.ChoiceField(
        choices=[("", "-")],  # Will be dynamically set in __init__
        initial="",
        label="Similarity Algorithm",
    )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        available_algos = [
            algo
            for algo in SimilarityAlgorithm
            if algo.name in AVAILABLE_SIMILARITY_ALGORITHMS
        ]

        self.fields["algorithm"].choices += [
            (algo.name, algo.config.display_name) for algo in available_algos
        ]

        for algo in available_algos:
            form = algo.config.form_class(prefix=f"{algo.name}_", *args)
            self.fields.update(form.fields)

    def clean(self):
        cleaned_data = super().clean()
        algorithm = cleaned_data.get("algorithm")
        if algorithm and algorithm in self.algorithm_forms:
            algo_form = self.algorithm_forms[algorithm]
            if not algo_form.is_valid():
                for field_name, error in algo_form.errors.items():
                    self.add_error(f"{algorithm}_{field_name}", error)
        return cleaned_data

    def save(self, commit=True):
        instance = super().save(commit=False)
        algorithm = self.cleaned_data["algorithm"]

        parameters = {
            name: self.cleaned_data[f"{algorithm}_{name}"]
            for name in self.algorithm_forms[algorithm].fields
        }
        parameters["algorithm"] = algorithm

        # TODO make something more dynamic using AVAILABLE_SIMILARITY_ALGORITHMS
        if algorithm == "segswap":
            parameters.update(
                {
                    "segswap_prefilter": self.cleaned_data.get(
                        f"{algorithm}_cosine_preprocessing", True
                    ),
                    "segswap_n": self.cleaned_data.get(
                        f"{algorithm}_cosine_n_filter", 0
                    ),
                }
            )

        if parameters.get("use_transpositions"):
            parameters["transpositions"] = ["none", "rot90", "rot270", "hflip", "vflip"]

        instance.parameters = parameters

        if commit:
            instance.save()

        return instance
