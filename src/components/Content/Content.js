import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './Content.scss'

/* Pages */
import Home from '../../Pages/Home'
import AboutCompany from '../../Pages/Company/About'
import PageNotFound from '../../Pages/PageNotFound'

const Content = () => {
  return (
    <div className={'content'}>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/company/about' element={<AboutCompany />} exact />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default Content