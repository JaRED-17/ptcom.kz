const express = require('express')
const webpack = require('webpack')
const nodemailer = require('nodemailer')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const path = require('path')
const dotenv = require('dotenv')

dotenv.config()
const app = express()
const env = process.env.NODE_ENV || 'development'
const config = require(env === 'development' ? './webpack.config.dev.js' : './webpack.config.prod.js')
const compiler = webpack(config)
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

if (env === 'development') {
  app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }))
  app.use(webpackHotMiddleware(compiler))

  app.get('*', (req, res, next) => {
    const filename = path.join(compiler.outputPath, 'index.html')
    compiler.outputFileSystem.readFile(filename, (err, result) => {
      if (err) {
        return next(err)
      }
      res.set('content-type', 'text/html')
      res.send(result)
      res.end()
    })
  })
} else {
  app.use(express.static('dist'))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
  })
}

app.post('/api/send-email', async (req, res) => {
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.json({ status: 'error' })
  }
  const { name, email, message } = req.body

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    })

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.TARGET_EMAIL,
      subject: `Новое сообщение от ${name}`,
      text: `Email: ${email}\n\nСообщение:\n${message}`
    })

    res.json({ status: 'ok' })
  } catch (err) {
    console.error(err)
    res.json({ status: 'error' })
  }
})

app.listen(PORT, () => {
  console.log(`Server has been started on http://localhost:${PORT}`)
})