/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.{js,jsx}', { eager: true })

// Section configuration
const config = {
  id: "week-5",
  title: "Processing Unstructured Text",
  order: 5,
  description: "OCR and rules-based approaches vs. LLMs for unstructured text",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }
