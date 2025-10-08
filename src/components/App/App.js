import React from 'react'
import './App.scss'
import Header from '../Header'
import Content from '../Content'
import Footer from '../Footer'
import ScrollToTop from '../ScrollToTop'

const App = () => {
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
