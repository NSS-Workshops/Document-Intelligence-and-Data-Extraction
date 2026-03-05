# What is Unstructured Data?

Unstructured data refers to any data that does not have a fixed schema or predefined format. This includes:  
* Emails  
* Contracts and legal documents  
* Social media posts  
* Articles, reports, and reviews  

Unlike structured data (csvs, databases) or semi-structred data (invoices), unstructred text requires natural language understanding to extract meaningful information.

For example, in the sentence "Please pay invoice AI-104882 of $649.50 by March 30, 2026.", a computer cannot easily know which number is the invoice, whic is the amount, and which is a date without processing the text.

---

## spaCy

spaCy is an NLP library in Python designed to process large volumes of text efficiently, extract structured information from unstructured text, and enable advanced NLP workflows, including entity recognition, dependency parsing, and more.

spaCy operates on already digitized text.

## Typical Workflow with spaCy

1. Load a Language Model

A language model is a pre-trained statistical model that understands the patterns and structure of a language. For example, it knows which sequences of words are common, how words relate to each other syntactically, and typical entities like dates, money, locations, or organizations.

spaCy provides these pretrained models, so that you can just load them and start processing without having to train them from scratch. We'll work with the en_core_web_sm model, a small, fast, model that hand process basic entities and syntax.

```
import spacy
nlp = spacy.load("en_core_web_sm")
```

2. Process Text

Now, we can convert raw text into a spaCy `Doc` object, which contains all the linguistic annotations the model provides, like tokenization, part-of-speech tags, named entities, and dependency relationships.

```
text = "Please pay invoice AI-104882 of $649.50 by March 30, 2026."
doc = nlp(text)
```

3. Extract Entities

Named entities are "real-world" objects in your text, like dates, money amounts, organizations, or locations. 

spaCy recognizes many entity types out-of-the-box, including `PERSON`, `ORG`, `GPE` (geopolitical entity), `DATE`, `TIME`, `MONEY`, and more.

```
for ent in doc.ents:
    print(ent.text, ent.label_)
```

Output:
```
AI-104882   ORG
$649.50     MONEY
March 30, 2026   DATE
```

4. Analyze Parts of Speech and Dependency

Understanding part of speech and dependency labels, allows us to extract patterns that depend on grammar rather than exact text.

```
for token in doc:
    print(token.text, token.pos_, token.dep_)
```

Output:
```
Please   VERB   ROOT
pay      VERB   xcomp
invoice  NOUN   dobj
AI-104882  PROPN  compound
of       ADP    prep
$649.50  MONEY   pobj
by       ADP    prep
March    PROPN  pobj
30       NUM    nummod
,        PUNCT  punct
2026     NUM    nummod
.        PUNCT  punct
```
---

## Regex vs spaCy for Extracting Information

We've seen how regex can be used to find patterns when the text is predictable. However, it can become more brittle when formatting changes or the phrasing varies. In these cases, spaCy can be the better choice. It is a language model, so it can recognize patterns in natural language, and can automatically detect things like dates, amounts, and organization names, even when the layout isn't consistent.

Regex works best for clean, predictable patterns, while spaCy is much more robust for messy, unstructred text.

## 📚 Additional Resources

- [spaCy Documentation](https://spacy.io/usage)
- [Natural Language Processing with spaCy in Python](https://realpython.com/natural-language-processing-spacy-python/)

---

# spaCy Walkthrough (Interactive Notebook – Includes Exercises)

<a href="https://colab.research.google.com/github/NSS-Workshops/Document-Intelligence-and-Data-Extraction/blob/main/src/sections/spacy/00-page/spacy_titorial.ipynb" target="_blank">
  <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab">
</a>

