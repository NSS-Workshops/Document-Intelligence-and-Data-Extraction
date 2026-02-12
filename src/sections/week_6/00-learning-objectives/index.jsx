import { formatObjectives } from "@nss-workshops/nss-core";

const data = [
  {category: "Advanced Document Intelligence", name: "Apply local and API-based language models to longer unstructured documents", level: "Apply"},
  {category: "Advanced Document Intelligence", name: "Explain the motivation behind RAG-like approaches for long documents", level: "Understand"},
  {category: "Advanced Document Intelligence", name: "Compare local, API-based, and cloud document intelligence solutions", level: "Analyze"},
  {category: "Advanced Document Intelligence", name: "Evaluate end-to-end document intelligence pipelines for robustness, cost and scalability", level: "Evaluate"},
];


export default {
  id: "week-6-learning-objectives",
  title: "Learning Objectives",
  description: "What you'll learn about advanced techniques and document intelligence solutions.",
  previousChapterId: null,
  nextChapterId: "week-6-session-1",
  content: `## 🎯 What You Will Learn

This week covers advanced techniques for working with longer documents and provides an overview of the broader document intelligence ecosystem. By the end of this week, you will understand RAG-like approaches, be able to compare different solution types, and evaluate complete pipelines for production readiness.

${formatObjectives(data)}
`,
  exercises: []
};
