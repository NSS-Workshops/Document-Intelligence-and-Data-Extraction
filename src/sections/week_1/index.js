/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.{js,jsx}', { eager: true })

// Section configuration
const config = {
  id: "week-1",
  title: "Introduction to Document Intelligence",
  order: 1,
  description: "Introduction to Data Intelligence, OCR basics, and working with structured documents",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }
