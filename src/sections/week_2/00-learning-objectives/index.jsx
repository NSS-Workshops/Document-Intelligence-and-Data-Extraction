import { formatObjectives } from "@nss-workshops/nss-core";

const data = [
  {category: "OCR + Rules", name: "Explain how regular expressions can be used to extract structured fields from text", level: "Remember, Understand"},
  {category: "OCR + Rules", name: "Apply regular expressions to OCR output to extract invoice fields", level: "Apply"},
  {category: "OCR + Rules", name: "Construct a basic invoice processing pipeline that outputs structured JSON", level: "Apply"},
  {category: "OCR + Rules", name: "Analyze failure cases when using OCR + regex on noisy documents", level: "Analyze"},
  {category: "Local Language Models", name: "Explain what a language model is and how it differs from rule-based approaches", level: "Remember, Understand"},
  {category: "Local Language Models", name: "Use HuggingFace transformers to run a local language model", level: "Apply"},
  {category: "Local Language Models", name: "Design prompts that specify structured JSON output", level: "Apply"},
  {category: "Local Language Models", name: "Compare LLM-based extraction results against OCR + regex approaches", level: "Analyze"},
];


export default {
  id: "week-2-learning-objectives",
  title: "Learning Objectives",
  description: "What you'll learn about OCR + regex and local language models.",
  previousChapterId: null,
  nextChapterId: "week-2-session-1",
  content: `## 🎯 What You Will Learn

This week covers building invoice processors using OCR combined with regular expressions, and introduces local language models as an alternative extraction approach. By the end of this week, you will be able to construct extraction pipelines using both rule-based and LLM-based methods.

${formatObjectives(data)}
`,
  exercises: []
};
