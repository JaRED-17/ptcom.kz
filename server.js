const express = require('express')
const webpack = require('webpack')
const bodyParser = require('body-parser')
const webpackDevMiddleware = require('webpack-dev-middleware')
const path = require('path')

const app = express()
const env = process.env.NODE_ENV || 'development'
const config = require(env === 'development' ? './webpack.config.dev.js' : './webpack.config.prod.js')
const compiler = webpack(config)
const PORT = process.env.PORT || 3000

app.use(webpackDevMiddleware(compiler, { publicPath: config.output.publicPath }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('dist'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server has been started on http://localhost:${PORT}`)
})