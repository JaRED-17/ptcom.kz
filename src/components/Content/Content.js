import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './Content.scss'

/* Pages */
import Home from '../../Pages/Home'
import AboutUs from '../../Pages/AboutUs'
import PageNotFound from '../../Pages/PageNotFound'
import Services from '../../Pages/Services'
import ProvisionOfWagons from '../../Pages/ProvisionOfWagons'
import PaymentRailwayTariffs from '../../Pages/PaymentRailwayTariffs'
import DriveWays from '../../Pages/DriveWays'
import Schema from '../../Pages/Schema'
import HandlingDostyk from '../../Pages/HandlingDostyk'
import СargoProcessing from '../../Pages/СargoProcessing'
import Consultation from '../../Pages/Consultation'
import Calculation from '../../Pages/Calculation'
import Contacts from '../../Pages/Contacts'
import Sitemap from '../../Pages/Sitemap'
import StyleGuide from '../../Pages/StyleGuide'

const Content = () => {
  return (
    <div className={'content'}>
      <Routes>
        <Route path={'/'} element={<Home />} exact />
        <Route path={'/about-us'} element={<AboutUs />} exact />
        <Route path={'/services'} element={<Services />} exact />
        <Route path={'/services/provision-of-wagons'} element={<ProvisionOfWagons />} exact />
        <Route path={'/services/payment-railway-tariffs'} element={<PaymentRailwayTariffs />} exact />
        <Route path={'/services/drive-ways'} element={<DriveWays />} exact />
        <Route path={'/services/schema'} element={<Schema />} exact />
        <Route path={'/services/handling-dostyk'} element={<HandlingDostyk />} exact />
        <Route path={'/services/cargo-processing'} element={<CargoProcessing />} exact />
        <Route path={'/consultation'} element={<Consultation />} exact />
        <Route path={'/calculation'} element={<Calculation />} exact />
        <Route path={'/contacts'} element={<Contacts />} exact />
        <Route path={'/sitemap'} element={<Sitemap />} exact />
        <Route path={'/style-guide'} element={<StyleGuide />} exact />
        <Route path={'*'} element={<PageNotFound />} />
      </Routes>
      <div className={'content__background'} />
    </div>
  )
}

export default Content