const { SitemapStream, streamToPromise } = require('sitemap')
const { createWriteStream } = require('fs')
const path = require('path')
const pages = require('../cms/data/pages.json')
const settings = require('../cms/data/settings.json')

const handlePages = (pages, languages) => {
  const array = []

  pages.forEach(page => {
    languages.map((language) => {
      return {
        url: `/${language}${page.url}`,
        changefreq: 'daily',
        priority: 1.0
      }
    }).forEach(entry => array.push(entry))

    if (page.entries) {
      handlePages(page.entries, languages).forEach(entry => array.push(entry))
    }
  })

  return array
}

async function generateSitemap () {
  const DOMAIN = 'https://ptcom.kz'
  const sitemapPath = path.resolve(__dirname, '../../public/sitemap.xml')
  const writeStream = createWriteStream(sitemapPath)
  const sitemap = new SitemapStream({ hostname: DOMAIN })

  sitemap.pipe(writeStream)

  for (const page of handlePages(pages, settings.languages)) {
    sitemap.write(page)
  }

  sitemap.end()

  await streamToPromise(sitemap)
  console.log(`✅ Sitemap успешно создан по пути: ${sitemapPath}`)
}

generateSitemap().catch(console.error)
