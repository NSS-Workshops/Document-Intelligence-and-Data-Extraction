/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.{js,jsx}', { eager: true })

// Section configuration
const config = {
  id: "week-6",
  title: "Advanced Techniques and Wrap-up",
  order: 6,
  description: "Continued work with LLMs for unstructured text and introduction to additional techniques",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }
