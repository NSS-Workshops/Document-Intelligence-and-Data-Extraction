/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.{js,jsx}', { eager: true })

// Section configuration
const config = {
  id: "week-2",
  title: "OCR + Regex and Local Language Models",
  order: 2,
  description: "Building invoice processors with OCR and regex, working with local language models",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }
