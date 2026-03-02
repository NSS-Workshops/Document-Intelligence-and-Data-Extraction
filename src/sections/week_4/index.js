/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.{js,jsx}', { eager: true })

// Section configuration
const config = {
  id: "week-4",
  title: "LLM APIs and Unstructured Documents",
  order: 4,
  description: "Continued API-based extraction and introduction to unstructured documents",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }
