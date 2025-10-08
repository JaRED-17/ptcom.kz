import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './Content.scss'
import data from '../../data/pages.json'

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
import CargoProcessing from '../../Pages/CargoProcessing'
import Consultation from '../../Pages/Consultation'
import Calculation from '../../Pages/Calculation'
import Contacts from '../../Pages/Contacts'
import Sitemap from '../../Pages/Sitemap'
import StyleGuide from '../../Pages/StyleGuide'

const Content = () => {
  const components = {
    'aboutUs': <AboutUs />,
    'services': <Services />,
    'provisionOfWagons': <ProvisionOfWagons />,
    'paymentRailwayTariffs': <PaymentRailwayTariffs />,
    'driveWays': <DriveWays />,
    'schema': <Schema />,
    'handlingDostyk': <HandlingDostyk />,
    'cargoProcessing': <CargoProcessing />,
    'consultation': <Consultation />,
    'calculation': <Calculation />,
    'contacts': <Contacts />,
    'sitemap': <Sitemap />
  }
  const { pages } = data

  return (
    <div className={'content'}>
      <Routes>
        <Route path={'/'} element={<Home />} exact />
        {(() => pages.map((page, index) => {
          if (page.entries) {
            return (
              <>
                <Route key={index} path={page.url} element={components[page.name] || <PageNotFound />} exact />
                {(() => page.entries.map((page, index) => <Route key={index} path={page.url} element={components[page.name] || <PageNotFound />} exact />))()}
              </>
            )
          }

          return <Route key={index} path={page.url} element={components[page.name] || <PageNotFound />} exact />
        }))()}
        <Route path={'/sitemap'} element={<Sitemap />} exact />
        <Route path={'/style-guide'} element={<StyleGuide />} exact />
        <Route path={'*'} element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default Content