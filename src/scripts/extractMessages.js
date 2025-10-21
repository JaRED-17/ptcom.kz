import { glob } from 'glob'
import fs from 'fs-extra'
import path from 'path'
import { pathToFileURL } from 'url'

const files = await glob('src/**/**.messages.js')
const enMessages = (await import('../locales/en.json', { with: { type: "json" } })).default || {}
const ruMessages = {}

for (const file of files) {
  const moduleUrl = pathToFileURL(path.resolve(file)).href
  const messages = (await import(moduleUrl)).default

  for (const [key, value] of Object.entries(messages)) {
    ruMessages[key] = value.defaultMessage

    if (!enMessages[key]) {
      enMessages[key] = value.defaultMessage
    }
  }
}

function sortMessages (messages) {
  return Object.keys(messages)
    .sort()
    .reduce((acc, key) => {
      acc[key] = messages[key]
      return acc
    }, {})
}

const outputPathRu = 'src/locales/ru.json'
const outputPathEN = 'src/locales/en.json'
await fs.outputJson(outputPathRu, sortMessages(ruMessages), { spaces: 2 })
await fs.outputJson(outputPathEN, sortMessages(enMessages), { spaces: 2 })

console.log(`✅ Готово! Файл сохранён: ${outputPathRu}`)
