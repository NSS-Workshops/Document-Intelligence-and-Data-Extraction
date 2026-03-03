/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.{js,jsx}', { eager: true })

// Section configuration
const config = {
  id: "ocr-basics",
  title: "OCR Basics",
  order: 3,
  description: "An introduction to OCR and common Python OCR tools",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }