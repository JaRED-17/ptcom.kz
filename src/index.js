import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import App from './components/App/App'
import ErrorFallback from './components/ErrorFallback'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { ErrorBoundary } from 'react-error-boundary'
import { SnackbarProvider } from 'notistack'
import language from './helpers/language'

if (!window.localStorage.getItem('_lang')) {
  language.setDefaultLanguage()
}

export const getMessages = async (locale) => {
  try {
    const messages = await import(`/src/locales/${locale}.json`)
    return messages.default
  } catch (e) {
    console.warn(`Нет перевода для ${locale}, используется ru`)
    const fallback = await import('/src/locales/ru.json')
    return fallback.default
  }
}

const IntlWrapper = ({ locale, children }) => {
  const [messages, setMessages] = React.useState(null)

  React.useEffect(() => {
    getMessages(locale).then(setMessages)
  }, [locale])

  if (!messages) return null

  return (
    <IntlProvider
      locale={locale}
      onError={(err) => {
        if (err.code === 'MISSING_TRANSLATION') {
          console.warn('Missing translation:', err.message)
        } else {
          throw err
        }
      }}
      messages={messages}
      defaultLocale={language.getDefaultLanguage()}
    >
      {children}
    </IntlProvider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <IntlWrapper locale={language.getCurrentLanguage()}>
      <BrowserRouter>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
          >
            <App />
          </SnackbarProvider>
        </ErrorBoundary>
      </BrowserRouter>
    </IntlWrapper>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
