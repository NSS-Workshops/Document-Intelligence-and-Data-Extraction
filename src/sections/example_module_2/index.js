/*
  Section configuration file
*/

// Import all chapter packages
const chapterModules = import.meta.glob('./*/index.js', { eager: true })

// Section configuration
const config = {
  id: "example-module-2",
  title: "Example Module 2",
  order: 2,
  description: "Example module 2 description",
}

const chapters = Object.values(chapterModules).map(chapter => ({ ...chapter.default, sectionId: config.id }) )

export { chapters, config }