In this section, you'll learn how to install and use Pytesseract to extract text from images. 

<iframe width="560" height="315" src="https://www.youtube.com/embed/BK4mejo8uK0?si=QPEpeEc7xcd_DfUp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

## Installation
 
First, install the Tesseract OCR engine by following the directions [here](https://tesseract-ocr.github.io/tessdoc/Installation.html). 

Then install the Python wrapper, `pytesseract`, using pip or conda, following the directions [here](https://pypi.org/project/pytesseract/#installation). 

In addition, you'll need to install the Python Imaging Library, or PIL, either through pip or conda. Directions for pip can be found [here](https://pillow.readthedocs.io/en/latest/installation/basic-installation.html).


## 📘 Section 1: What is Tesseract?

Tesseract is an open-source OCR model originally developed at Hewlett-Packard Laboratories and maintained by Google since 2006. It's a neural-network based model but is lightweight and fast to run.

In this course, we will use the Pytesseract library, which provides a Python interface to the Tesseract engine.

While Tesseract is fast and easy to use, its accuracy can be lower than other types of OCR models. Additionally, it typically requires more manual post-processing to extract structured information (such as invoice totals or dates), whereas modern LLM-based approaches can sometimes perform OCR and information extraction in a single step.

---

## Section 2: Typical Workflow

A common workflow when extracting text from images looks like this:  
1. Open the image using Pillow (PIL).  
2. Pass the image to `pytesseract`.  
3. Work with the extracted text.

Example: 

```
from PIL import Image
import pytesseract

img = Image.open("invoice_example.png")
text = pytesseract.image_to_string(img)

print(text)
```

The image_to_string function returns a string containing the recognized text.

---

## 📚 Additional Resources

- [A Comprehensive Tutorial on Optical Character Recognition (OCR) in Python With Pytesseract](https://www.datacamp.com/tutorial/optical-character-recognition-ocr-in-python-with-pytesseract)
- [OCR in Python Tutorials](https://www.youtube.com/watch?v=tQGgGY8mTP0&list=PL2VXyKi-KpYuTAZz__9KVl1jQz74bDG7i)
