Week 3, Session 1: Validation
Concept Content

<iframe width="560" height="315" src="https://www.youtube.com/embed/_OVTnccGRWs?si=w18L6eRoUB1QfWgT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


- need one paragraph about why we need validation deterministic vs probabilistic system 


Explain why validation is necessary when working with model-generated data
Introduce schema validation concepts (required fields, data types, constraints)
Explain retry strategies for handling invalid or incomplete outputs
Hands-On Exercise

Implement schema validation for invoice JSON output
Build a retry mechanism that:
Detects invalid output
Re-prompts or re-runs the model
Encourage students to reason about failure modes

# Pydantic Validation Tutorial (Interactive Notebook – Includes Exercises)

This interactive Colab notebook teaches you how to use Pydantic to validate model-generated JSON in document intelligence systems. You’ll define schemas, validate invoice data, handle errors, and complete hands-on exercises to apply validation in your own extraction pipeline.

<a href="https://colab.research.google.com/github/NSS-Workshops/Document-Intelligence-and-Data-Extraction/blob/main/src/sections/week_3/00-session-1/pydantic_tutorial.ipynb" target="_blank">
  <img src="https://colab.research.google.com/assets/colab-badge.svg" alt="Open In Colab">
</a>