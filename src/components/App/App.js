import React, {useEffect} from 'react'
import './App.scss'
import Header from '../Header'
import Content from '../Content'
import Footer from '../Footer'
import ScrollToTop from '../ScrollToTop'

const App = () => {
  const fixViewportHeight = () => {
    document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
  }
  useEffect(() => {
    window.addEventListener('resize', fixViewportHeight)
    window.addEventListener('orientationchange', fixViewportHeight)
    fixViewportHeight()

    return () => {
      window.removeEventListener('resize', fixViewportHeight)
      window.removeEventListener('orientationchange', fixViewportHeight)
    }
  }, [])

  return (
    <div className={'App'}>
      <ScrollToTop />
      <Header />
      <Content />
      <Footer />
      <div id={'background'} />
    </div>
  )
}

export default App
