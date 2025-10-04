import React from 'react'
import './YandexMap.scss'

const YandexMap = () => {
  return (
    <div className='yandex-map'>
      <div className='yandex-map__content'>
        <a
          className='yandex-map__content--link-1'
          href='https://yandex.kz/maps/10298/petropavlovsk/?utm_medium=mapframe&utm_source=maps'
        >
          {'Петропавловск'}
        </a>
        <a
          className='yandex-map__content--link-2'
          href='https://yandex.kz/maps/10298/petropavlovsk/?from=mapframe&ll=69.173684%2C54.859102&mode=usermaps&source=mapframe&um=constructor%3Aef98102f319677e718b7c616e1fc498c4f5efeaf3686b46b8324da645733d762&utm_medium=mapframe&utm_source=maps&z=17'
        >
          {'Яндекс Карты — транспорт, навигация, поиск мест'}
        </a>
        <iframe
          className='yandex-map__content--iframe'
          src='https://yandex.kz/map-widget/v1/?from=mapframe&ll=69.173684%2C54.859102&mode=usermaps&source=mapframe&um=constructor%3Aef98102f319677e718b7c616e1fc498c4f5efeaf3686b46b8324da645733d762&utm_source=mapframe&z=17'
          width='560'
          height='400'
          frameBorder='1'
          allowFullScreen='true'
        />
      </div>
    </div>
  )
}

export default YandexMap
