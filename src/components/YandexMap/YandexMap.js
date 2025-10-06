import React from 'react'
import './YandexMap.scss'

const YandexMap = () => {
  const classNamePrefix = 'yandex-map'

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__content`}>
        <iframe
          className={`${classNamePrefix}__content--iframe`}
          src={'https://yandex.kz/map-widget/v1/?from=mapframe&ll=69.173684%2C54.859102&mode=usermaps&source=mapframe&um=constructor%3Aef98102f319677e718b7c616e1fc498c4f5efeaf3686b46b8324da645733d762&utm_source=mapframe&z=17'}
          width={'980'}
          height={'500'}
          frameBorder={'1'}
          allowFullScreen={'true'}
        />
      </div>
    </div>
  )
}

export default YandexMap
