import { formatObjectives } from "@nss-workshops/nss-core";

const data = [
  {category: "Unstructured Documents", name: "Apply rule-based techniques to attempt extraction from unstructured text", level: "Apply"},
  {category: "Unstructured Documents", name: "Evaluate the effectiveness of LLM-based approaches on unstructured documents", level: "Evaluate"},
];


export default {
  id: "week-5-learning-objectives",
  title: "Learning Objectives",
  description: "What you'll learn about processing unstructured text.",
  previousChapterId: null,
  nextChapterId: "week-5-session-1",
  content: `## 🎯 What You Will Learn

This week focuses on applying both rule-based and LLM-based approaches to unstructured documents. By the end of this week, you will be able to compare the effectiveness of different extraction techniques on documents with unpredictable layouts and formats.

${formatObjectives(data)}
`,
  exercises: []
};
