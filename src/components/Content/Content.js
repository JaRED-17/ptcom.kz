import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './Content.scss'

/* Pages */
import Home from '../../Pages/Home'
import AboutCompany from '../../Pages/Company/About'
import PageNotFound from '../../Pages/PageNotFound'
import Services from '../../Pages/Services'
import DriveWays from '../../Pages/DriveWays'
import Contacts from '../../Pages/Contacts'
import StyleGuide from '../../Pages/StyleGuide'

const Content = () => {
  return (
    <div className={'content'}>
      <Routes>
        <Route path={'/'} element={<Home />} exact />
        <Route path={'/company/about'} element={<AboutCompany />} exact />
        <Route path={'/services'} element={<Services />} exact />
        <Route path={'/services/drive-ways'} element={<DriveWays />} exact />
        <Route path={'/contacts'} element={<Contacts />} exact />
        <Route path={'/style-guide'} element={<StyleGuide />} exact />
        <Route path={'*'} element={<PageNotFound />} />
      </Routes>
      <div className={'content__background'} />
    </div>
  )
}

export default Content