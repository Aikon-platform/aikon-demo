from django import forms

class IndexRadioSelect(forms.RadioSelect):
    option_label_template_name = "search/index_option_label.html"