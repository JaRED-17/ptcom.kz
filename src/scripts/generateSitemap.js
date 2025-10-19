const { SitemapStream, streamToPromise } = require('sitemap')
const { createWriteStream } = require('fs')
const path = require('path')
const pages = require('../cms/data/pages.json')
const settings = require('../cms/data/settings.json')

const handlePages = (pages, languages, addHomeUrl = false) => {
  const array = []
  const generateUrlsByLanguages = (language, url) => {
    return {
      url: `/${language}${url}`,
      lastmod: new Date().toLocaleDateString(),
      changefreq: 'daily',
      priority: 1.0
    }
  }

  if (addHomeUrl) {
    languages.map(language => generateUrlsByLanguages(language, '')).forEach(entry => array.push(entry))
  }

  pages.forEach(page => {
    languages.map((language) => generateUrlsByLanguages(language, page.url)).forEach(entry => array.push(entry))

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
  const pagesForSitemap = handlePages(pages, settings.languages, true)

  sitemap.pipe(writeStream)

  for (const page of pagesForSitemap) {
    sitemap.write(page)
  }

  sitemap.end()

  await streamToPromise(sitemap)
  console.log(`✅ Sitemap успешно создан по пути: ${sitemapPath}`)
}

generateSitemap().catch(console.error)
