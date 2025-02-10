from django import forms


class Profileform(forms.Form):
    # name = forms.CharField()
    # age = forms.IntegerField()
    image = forms.FileField()
    
    
# from django import forms
 
# class Profileform(forms.Form):
#     userimage = forms.FileField()
 