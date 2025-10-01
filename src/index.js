import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './components/App/App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { IntlProvider } from 'react-intl'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <IntlProvider
      locale='ru'
      onError={(err) => {
        if (err.code === 'MISSING_TRANSLATION') {
          console.warn('Missing translation:', err.message)
        } else {
          throw err
        }
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlProvider>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
