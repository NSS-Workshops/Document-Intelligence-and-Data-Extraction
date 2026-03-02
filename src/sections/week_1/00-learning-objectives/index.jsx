import { formatObjectives } from "@nss-workshops/nss-core";

const data = [
  {category: "Data Intelligence Foundations", name: "Distinguish between structured, semi-structured, and unstructured documents", level: "Remember, Understand"},
  {category: "Data Intelligence Foundations", name: "Explain the roles of OCR and NLP in document intelligence pipelines", level: "Remember, Understand"},
  {category: "Data Intelligence Foundations", name: "Analyze tradeoffs between accuracy, cost, and speed across extraction approaches", level: "Analyze"},
  {category: "Data Intelligence Foundations", name: "Identify limitations of regex-only approaches when inspecting real-world invoices", level: "Understand"},
  {category: "OCR Basics", name: "Explain what Optical Character Recognition (OCR) is and how it works at a high level", level: "Remember, Understand"},
  {category: "OCR Basics", name: "Identify common Python OCR tools and their typical use cases", level: "Remember, Understand"},
  {category: "OCR Basics", name: "Apply pytesseract to extract text from invoice images", level: "Apply"},
  {category: "OCR Basics", name: "Evaluate OCR output quality and identify common sources of extraction errors", level: "Analyze"},
];


export default {
  id: "week-1-learning-objectives",
  title: "Learning Objectives",
  description: "What you'll learn about document intelligence and OCR basics.",
  previousChapterId: null,
  nextChapterId: "week-1-session-1",
  content: `## 🎯 What You Will Learn

This week introduces the foundations of document intelligence and Optical Character Recognition (OCR). By the end of this week, you will understand different document types, the role of OCR and NLP in extraction pipelines, and gain hands-on experience applying OCR tools to real invoice images.

${formatObjectives(data)}
`,
  exercises: []
};
