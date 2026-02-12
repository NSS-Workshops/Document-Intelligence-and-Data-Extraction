## Section 1: Using image_to_data

Sometimes you need more than just plain text from an image. You might want information about where text appears or the structure of the document.

This is where `pytesseract.image_to_data` can help. It returns a detailed breakdown of your image, including the text, layout, and hierarchy.

**Tip:** For easy searching and manipulation, it's best to get the output as a pandas DataFrame by setting `output_type=pytesseract.Output.DATAFRAME`:

```
import pytesseract
from PIL import Image

img = Image.open("document.png")
df = pytesseract.image_to_data(img, output_type=pytesseract.Output.DATAFRAME)
```

Each row in the DataFrame represents either a section or unit of text, and the `level` column tells you where it fits in the document hierarchy.

The document hierarchy is captured in the "level".

| level | meaning |
| ----- | ------- |
| 1 | page |
| 2 | block |
| 3 | paragraph |
| 4 | line |
| 5 | word |  


The text is contained at the word level in the `text` column. Other columns, like `left`, `top`, `width`, and `height` give you the location of each word on the image.

---

## 🧭 Section 2: Cropping in PIL

Once you know where your text is, you migt want to crop the image to focus on a specific block, line, or word. PIL makes this easy.

```
from PIL import Image

# Crop using coordinates from pytesseract
left = 100
top = 200
width = 150
height = 50

cropped_img = img.crop((left, top, left + width, top + height))
cropped_img.show()
```

If you're working in Jupyter, you can also display the cropped image using `IPython.display.display` directly inside the notebook without opening a separate window. For example,
```
from IPython.display import display

display(cropped_img)
```

---

## 🧭 Section 3: Page segmentation methods

By default, Tesseract automatically divides a document into blocks and lines, a process called page segmentation. This usually works well, but sometimes the default behavior splits text in ways that make it harder to analyze.

For example, if the "Date of issue:" label and its corresponding date are spaced far away on the same line, the default page segmentation might make it difficult to match them up programmatically.

Tesseract offers multiple different page segmentation methods (PSM) to handle different layouts. You can read about the different options [here](https://tesseract-ocr.github.io/tessdoc/ImproveQuality.html#page-segmentation-method). 

The default is psm 3, which performs automatic page segmentation but which does not perform Orientation and Script detection to identify how an image is rotated.

Another useful one is psm 6, which treats the whole document as a single uniform block of text. This preserves lines but does not further segment the document.

The psm can be set using the `config` parameter of the `image_to_string` or `image_to_data` function. For example:

```
# Use PSM 6 to treat the document as a single block
data = pytesseract.image_to_data(img, config='--psm 6')
```

---

## 📚 Additional Resources

- [Tesseract Page Segmentation Modes (PSMs) Explained](https://pyimagesearch.com/2021/11/15/tesseract-page-segmentation-modes-psms-explained-how-to-improve-your-ocr-accuracy/)
- [Pytesseract | Function Parameters](https://www.kaggle.com/code/dhorvay/pytesseract-function-parameters)

