from django import forms

from datasets.fields import ContentRestrictedFileField
from datasets.models import Dataset
from datasets.forms import AbstractDatasetForm, MAP_FIELD_FORMAT


class AbstractTaskForm(forms.ModelForm):
    class Meta:
        model = None
        abstract = True
        fields = ("name", "notify_email")

    def __init__(self, *args, **kwargs):
        self._user = kwargs.pop("user", None)

        super().__init__(*args, **kwargs)

    def _populate_instance(self, instance):
        instance.requested_by = self._user

    def save(self, commit=True):
        instance = super().save(commit=False)
        self._populate_instance(instance)

        if commit:
            instance.save()

        return instance


class AbstractTaskOnDatasetForm(AbstractTaskForm, AbstractDatasetForm):
    class Meta(AbstractTaskForm.Meta, AbstractDatasetForm.Meta):
        # model = AbstractAPITaskOnDataset
        abstract = True
        fields = (
            AbstractTaskForm.Meta.fields
            + AbstractDatasetForm.Meta.fields
            + ("dataset",)
        )
        # widgets = {
        #     'dataset': forms.Select(attrs={'extra-class': 'old-dataset-field'}),
        # }

    dataset = forms.ModelChoiceField(
        queryset=Dataset.objects.all(),
        label="Use dataset from...",
        required=False,
        widget=forms.Select(attrs={"extra-class": "old-dataset-field"}),
    )
    reuse_dataset = forms.BooleanField(
        required=False,
        initial=False,
        label="Reuse existing dataset 🔄",
        widget=forms.CheckboxInput(attrs={"class": "use-dataset mb-3"}),
    )

    def __init__(self, *args, **kwargs):
        # super().__init__(*args, **kwargs)
        # self._dataset = None

        self._dataset = kwargs.pop("dataset", None)
        super().__init__(*args, **kwargs)

        self.fields["dataset"].queryset = self.fields["dataset"].queryset.filter(
            created_by=self._user,
        )

        # self.order_fields(
        #     ["reuse_dataset"] +
        #     list(self.fields)[:-1]  # remove reuse_dataset to put it at first
        # )

    def check_dataset(self):
        """
        Check if the dataset was provided
        """
        reuse_dataset = self.cleaned_data.get("reuse_dataset", False)
        if reuse_dataset:
            is_dataset = self.cleaned_data.get("dataset", None)
            is_crops = self.cleaned_data.get("crops", True)

            if not is_dataset and not is_crops:
                self.add_error("dataset", "A dataset is required.")
                return False
        else:
            data_format = self.cleaned_data.get("format", None)
            if not data_format:
                self.add_error("format", "A dataset format is required.")
                return False

            if data_format in MAP_FIELD_FORMAT:
                field_name = MAP_FIELD_FORMAT[data_format]
                if not self.cleaned_data.get(field_name):
                    self.add_error(field_name, "A file is required.")
                    return False
            else:
                self.add_error("format", "Invalid dataset format.")
                return False

        return True

    def is_valid(self) -> bool:
        return super().is_valid() and self.check_dataset()

    def _populate_dataset(self):
        if dataset := self.cleaned_data["dataset"]:
            self._dataset = dataset
            return
        # if self._dataset:
        #     return

        dataset_fields = {
            "name": self.cleaned_data.get("dataset_name", None),
            "created_by": self._user,
        }

        data_format = self.cleaned_data.get("format", None)
        if data_format in MAP_FIELD_FORMAT:
            field_name = MAP_FIELD_FORMAT[data_format]
            dataset_fields[field_name] = self.cleaned_data[field_name]

        self._dataset = Dataset.objects.create(**dataset_fields)

    def save(self, commit=True):
        self._populate_dataset()
        instance = super().save(commit=False)
        instance.dataset = self._dataset
        super()._populate_instance(instance)

        if commit:
            instance.save()

        return instance


class AbstractTaskOnCropsForm(AbstractTaskOnDatasetForm):
    class Meta:
        model = None
        abstract = True
        fields = AbstractTaskOnDatasetForm.Meta.fields + ("crops",)
        widgets = {
            "crops": forms.Select(attrs={"extra-class": "old-dataset-field"}),
        }

    def __init__(self, *args, **kwargs):
        self._crops = kwargs.pop("crops", None)
        super().__init__(*args, **kwargs)
        self.fields["crops"].queryset = self.fields["crops"].queryset.filter(
            regions__isnull=False,
            requested_by=self._user,
        )

        self.order_fields(list(AbstractTaskOnDatasetForm.Meta.fields) + ["crops"])

    def check_dataset(self):
        # Hook to set the dataset from the crops
        # TODO change here
        # if self.cleaned_data.get("crops", None):
        #     self._dataset = self.cleaned_data["crops"].dataset
        return super().check_dataset()

    def save(self, commit=True):
        # TODO check if crops were provided, if so set the dataset from the crops
        instance = super().save(commit=False)

        # self._populate_instance(instance)
        # instance.crops = self.cleaned_data.get("crops", None)
        #
        # if commit:
        #     instance.save()

        return instance


class AbstractTaskOnImageForm(AbstractTaskForm):
    class Meta:
        model = None
        abstract = True
        fields = ("name", "image", "notify_email")

    image = ContentRestrictedFileField(
        label="Upload an image",
        help_text="An image to be processed",
        accepted_types=["image/jpeg", "image/png"],
        max_size=1024 * 1024 * 10,
    )

    def _populate_instance(self, instance):
        super()._populate_instance(instance)
        instance.name = self.cleaned_data["image"].name
