import { formatObjectives } from "@nss-workshops/nss-core";

const data = [
  {category: "Validation and APIs", name: "Explain the importance of schema validation when working with model-generated output", level: "Remember, Understand"},
  {category: "Validation and APIs", name: "Implement schema validation for extracted invoice data using Pydantic.", level: "Apply"},
  {category: "Validation and APIs", name: "Design and implement a retry mechanism for failed or invalid model outputs", level: "Apply"},
  {category: "Validation and APIs", name: "Explain how API costs and prompt parameters (e.g., temperature) impact extraction reliability", level: "Understand"},
  {category: "Validation and APIs", name: "Apply an LLM API to perform invoice extraction", level: "Apply"},
];


export default {
  id: "week-3-learning-objectives",
  title: "Learning Objectives",
  description: "What you'll learn about validation and LLM APIs.",
  previousChapterId: null,
  nextChapterId: "week-3-session-1",
  content: `## 🎯 What You Will Learn

This week focuses on making extraction pipelines robust through schema validation and retry mechanisms, and introduces working with LLM APIs. By the end of this week, you will understand how to validate model outputs, handle failures gracefully, and leverage API-based language models for extraction tasks.

${formatObjectives(data)}
`,
  exercises: []
};
