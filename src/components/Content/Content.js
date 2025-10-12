import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './Content.scss'
import pages from '../../cms/data/pages.json'

/* Pages */
import Home from '../../pages/Home'
import AboutUs from '../../pages/AboutUs'
import Staffs from '../../pages/Staffs'
import News from '../../pages/News'
import Licenses from '../../pages/Licenses'
import Vacancies from '../../pages/Vacancies'
import PageNotFound from '../../pages/PageNotFound'
import Services from '../../pages/Services'
import ProvisionOfWagons from '../../pages/ProvisionOfWagons'
import PaymentRailwayTariffs from '../../pages/PaymentRailwayTariffs'
import DriveWays from '../../pages/DriveWays'
import Schema from '../../pages/Schema'
import HandlingDostyk from '../../pages/HandlingDostyk'
import CargoProcessing from '../../pages/CargoProcessing'
import Consultation from '../../pages/Consultation'
import DangerousGoods from '../../pages/dangerousGoods'
import Containers from '../../pages/Containers'
import Wagons from '../../pages/Wagons'
import WagonsTypes from '../../pages/WagonsTypes'
import Calculation from '../../pages/Calculation'
import Contacts from '../../pages/Contacts'
import Sitemap from '../../pages/Sitemap'
import StyleGuide from '../../pages/StyleGuide'
import StaticPage from '../../pages/StaticPage'

const Content = () => {
  const components = {
    'aboutUs': <AboutUs />,
    'staffs': <Staffs />,
    'news': <News />,
    'licenses': <Licenses />,
    'vacancies': <Vacancies />,
    'services': <Services />,
    'provisionOfWagons': <ProvisionOfWagons />,
    'paymentRailwayTariffs': <PaymentRailwayTariffs />,
    'driveWays': <DriveWays />,
    'schema': <Schema />,
    'handlingDostyk': <HandlingDostyk />,
    'cargoProcessing': <CargoProcessing />,
    'consultation': <Consultation />,
    'dangerousGoods': <DangerousGoods />,
    'containers': <Containers />,
    'wagons': <Wagons />,
    'wagonsTypes': <WagonsTypes />,
    'calculation': <Calculation />,
    'contacts': <Contacts />,
    'sitemap': <Sitemap />
  }
  const handlePages = (pages) => {
    return pages.map((page, index) => {
      if (page.entries) {
        return (
          <>
            <Route key={index} path={page.url} element={page.static ? <StaticPage name={page.name} /> : components[page.name] || <PageNotFound />} exact />
            {(() => handlePages(page.entries))()}
          </>
        )
      }

      return <Route key={index} path={page.url} element={page.static ? <StaticPage name={page.name} /> : components[page.name] || <PageNotFound />} exact />
    })
  }

  return (
    <div className={'content'}>
      <Routes>
        <Route path={'/'} element={<Home />} exact />
        {(() => handlePages(pages))()}
        <Route path={'/sitemap'} element={<Sitemap />} exact />
        <Route path={'/style-guide'} element={<StyleGuide />} exact />
        <Route path={'*'} element={<PageNotFound />} />
      </Routes>
    </div>
  )
}

export default Content