import { glob } from 'glob'
import fs from 'fs-extra'
import path from 'path'
import { pathToFileURL } from 'url'

const files = await glob('src/**/**.messages.js')

const allMessages = {}

for (const file of files) {
  const moduleUrl = pathToFileURL(path.resolve(file)).href
  const messages = (await import(moduleUrl)).default

  for (const [key, value] of Object.entries(messages)) {
    allMessages[key] = value.defaultMessage
  }
}

const sortedAllMessages = Object.keys(allMessages)
  .sort()
  .reduce((acc, key) => {
    acc[key] = allMessages[key]
    return acc
  }, {})

const outputPath = 'src/locales/ru.json'
await fs.outputJson(outputPath, sortedAllMessages, { spaces: 2 })

console.log(`✅ Готово! Файл сохранён: ${outputPath}`)
