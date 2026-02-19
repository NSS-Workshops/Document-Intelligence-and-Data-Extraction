/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.js', { eager: true })

// Section configuration
const config = {
  id: "introduction",
  title: "Introduction",
  order: 3,
  description: "Introduction to Document Intelligence",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }