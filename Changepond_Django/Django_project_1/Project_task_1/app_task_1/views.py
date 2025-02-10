# views.py
from django.shortcuts import render, redirect
from .forms import ImageUploadForm
from .models import MyModel

def upload_image(request):
    if request.method == 'POST':
        form = ImageUploadForm(request.POST, request.FILES)
        if form.is_valid():
            name = form.cleaned_data['name']
            image_file = form.FILES['image_file'].read()  # Read binary data from the file

            # Create a new MyModel instance with the binary data
            MyModel.objects.create(name=name, image=image_file)
            
            return redirect('success_url')  # Redirect to a success page or similar
    else:
        form = ImageUploadForm()
    return render(request, 'upload.html', {'form': form})