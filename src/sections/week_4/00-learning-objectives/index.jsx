import { formatObjectives } from "@nss-workshops/nss-core";

const data = [
  {category: "Validation and APIs", name: "Apply an LLM API to perform invoice extraction", level: "Apply"},
  {category: "Unstructured Documents", name: "Explain why unstructured documents present unique challenges for extraction", level: "Remember, Understand"},
];


export default {
  id: "week-4-learning-objectives",
  title: "Learning Objectives",
  description: "What you'll learn about API-based extraction and unstructured documents.",
  previousChapterId: null,
  nextChapterId: "week-4-session-1",
  content: `## 🎯 What You Will Learn

This week continues hands-on practice with API-based invoice extraction and introduces the challenges of working with unstructured documents. By the end of this week, you will have deeper experience with LLM APIs and understand why unstructured text requires different extraction strategies.

${formatObjectives(data)}
`,
  exercises: []
};
