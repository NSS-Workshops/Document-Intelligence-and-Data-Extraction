There are many steps involved in document intelligence. Together, these steps transform raw documents into usable data.

<iframe width="560" height="315" src="https://www.youtube.com/embed/FpfhY-_0uCw?si=-mu_S9voG2BSFWpl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
---

## Document Ingestion

The first step is capturing or ingesting documents into a system. This can occur through email attachments, file uploads, scanned documents, or automated system exports.

---

## Text Extraction

After documents are captured, the next step is extracting the text they contain. This is typically done using specialized machine learning models.

Text extraction can occur through several methods:  
* Optical Character Recognition (OCR): Converts printed or machine-generated text images to text. *This is the primary method we'll use in this course.*
* Intelligent Character Recognition (ICR): Converts hand-written text into digital data. This is more complex and requires advanced models.
* Optical Mark Recognition (OMR): Detects the presence or absence of marks, like checkboxes or bubbles.

---

## Information Extraction

Once the text has been extracted, the next step is finding the relevant fields or information from the document. This can be done by matching a template (for standardized forms), by using a rules-based or pattern-matching approach, or by using an AI, machine learning, or large language model (LLM) approach.

Rules-based or pattern-matching approaches are fast, cheap, transparent, and predictable, but can be brittle, struggle with ambiguity, or break with layout changes. They also require a lot of work when there are vendor variability.

An LLM-bases approach is better at handling variability, and understand context, but does so at a higher cost, can be much slower, and requires validation and monitoring. 
