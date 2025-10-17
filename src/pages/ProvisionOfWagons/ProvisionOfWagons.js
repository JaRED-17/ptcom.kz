import React from 'react'
import './ProvisionOfWagons.scss'
import setMessages from '../../helpers/setMessages'
import messages from './ProvisionOfWagons.messages'
import Markdown from '../../components/Markdown'
import PageTitle from '../../components/PageTitle'
import PageWithAsideMenu from '../../components/PageWithAsideMenu'
import WagonsDescription from './WagonsDescription'
import OurAdvantages from '../../components/OurAdvantages'

const ProvisionOfWagons = () => {
  const classNamePrefix = 'provision-of-wagons'
  const message = setMessages(messages, 'app.page.provisionOfWagons.')

  return (
    <PageWithAsideMenu classNamePrefix={classNamePrefix} index={1}>
      <PageTitle name={'provisionOfWagons'} />
      <p className={'text-color-gray'}>{message('paragraph')}</p>
      <p className={'text-color-orange text-bolt text-header'}>{message('header1')}</p>
      <div className={`${classNamePrefix}__content--list`}>
        <div className={`${classNamePrefix}__list1`}>
          <Markdown childrenClassName={{ target: 'list', className: 'text-color-gray' }} text={message('list1')} />
        </div>
        <div className={`${classNamePrefix}__list2`}>
          <Markdown childrenClassName={{ target: 'list', className: 'text-color-gray' }} text={message('list2')} />
        </div>
      </div>
      <p className={'text-color-orange text-bolt text-header'}>{message('header2')}</p>
      <Markdown childrenClassName={{ target: 'list', className: 'text-color-gray' }} text={message('list3')} />
      <WagonsDescription header={message('header3')} description={message('description1')} image={'kv'}>
        <table>
          <caption className={'text-bolt text-color-orange'}>Технические характеристики:</caption>
          <tbody>
            <tr>
              <td>Модель вагона</td>
              <td><strong>12-132</strong></td>
            </tr>
            <tr>
              <td>Масса тары вагона</td>
              <td>24 т</td>
            </tr>
            <tr>
              <td>Конструкционная скорость</td>
              <td>120 км/ч</td>
            </tr>
            <tr>
              <td>Грузоподъемность</td>
              <td>70000 кг</td>
            </tr>
            <tr>
              <td>Объем кузова</td>
              <td>88 м<sup>3</sup></td>
            </tr>
            <tr>
              <td>Площадь пола</td>
              <td>37.125 м<sup>2</sup></td>
            </tr>
            <tr>
              <td colSpan={2}>Внутренние размеры кузова</td>
            </tr>
            <tr>
              <td>- ширина</td>
              <td>2911 мм</td>
            </tr>
            <tr>
              <td>- длина</td>
              <td>12750 мм</td>
            </tr>
            <tr>
              <td>- высота</td>
              <td>2365 мм</td>
            </tr>
            <tr>
              <td colSpan={2}>Наличие торцовых дверей нет</td>
            </tr>
            <tr>
              <td>Количество разгрузочных люков</td>
              <td>14 шт</td>
            </tr>
            <tr>
              <td colSpan={2}>Угол открывания крышек люков</td>
            </tr>
            <tr>
              <td>- средних</td>
              <td>31°</td>
            </tr>
            <tr>
              <td>- над тележками</td>
              <td>22°</td>
            </tr>
            <tr>
              <td>- над тормозным цилиндром</td>
              <td>27°</td>
            </tr>
            <tr>
              <td>База вагона</td>
              <td>8650 мм</td>
            </tr>
            <tr>
              <td colSpan={2}>Длина</td>
            </tr>
            <tr>
              <td>- по осям сцепления автосцепок</td>
              <td>13920 мм</td>
            </tr>
            <tr>
              <td>- по концевым балкам рамы</td>
              <td>12780 мм</td>
            </tr>
            <tr>
              <td>Ширина максимальная</td>
              <td>3158 мм</td>
            </tr>
            <tr>
              <td colSpan={2}>Высота от уровня верха головок рельсов</td>
            </tr>
            <tr>
              <td>- максимальная</td>
              <td>3800 мм</td>
            </tr>
            <tr>
              <td>- до нижний обвязки</td>
              <td>1415 мм</td>
            </tr>
            <tr>
              <td>Количество осей</td>
              <td>4 шт</td>
            </tr>
          </tbody>
        </table>
      </WagonsDescription>
      <WagonsDescription header={message('header4')} description={message('description2')} image={'pv'}>
        <table>
          <caption className={'text-bolt text-color-orange'}>Технические характеристики:</caption>
          <tbody>
            <tr>
              <td>Модель вагона</td>
              <td><strong>12-132</strong></td>
            </tr>
            <tr>
              <td>Масса тары вагона</td>
              <td>24 т</td>
            </tr>
            <tr>
              <td>Конструкционная скорость</td>
              <td>120 км/ч</td>
            </tr>
            <tr>
              <td>Грузоподъемность</td>
              <td>70000 кг</td>
            </tr>
            <tr>
              <td>Объем кузова</td>
              <td>88 м<sup>3</sup></td>
            </tr>
            <tr>
              <td>Площадь пола</td>
              <td>37.125 м<sup>2</sup></td>
            </tr>
            <tr>
              <td colSpan={2}>Внутренние размеры кузова</td>
            </tr>
            <tr>
              <td>- ширина</td>
              <td>2911 мм</td>
            </tr>
            <tr>
              <td>- длина</td>
              <td>12750 мм</td>
            </tr>
            <tr>
              <td>- высота</td>
              <td>2365 мм</td>
            </tr>
            <tr>
              <td colSpan={2}>Наличие торцовых дверей нет</td>
            </tr>
            <tr>
              <td>Количество разгрузочных люков</td>
              <td>14 шт</td>
            </tr>
            <tr>
              <td colSpan={2}>Угол открывания крышек люков</td>
            </tr>
            <tr>
              <td>- средних</td>
              <td>31°</td>
            </tr>
            <tr>
              <td>- над тележками</td>
              <td>22°</td>
            </tr>
            <tr>
              <td>- над тормозным цилиндром</td>
              <td>27°</td>
            </tr>
            <tr>
              <td>База вагона</td>
              <td>8650 мм</td>
            </tr>
            <tr>
              <td colSpan={2}>Длина</td>
            </tr>
            <tr>
              <td>- по осям сцепления автосцепок</td>
              <td>13920 мм</td>
            </tr>
            <tr>
              <td>- по концевым балкам рамы</td>
              <td>12780 мм</td>
            </tr>
            <tr>
              <td>Ширина максимальная</td>
              <td>3158 мм</td>
            </tr>
            <tr>
              <td colSpan={2}>Высота от уровня верха головок рельсов</td>
            </tr>
            <tr>
              <td>- максимальная</td>
              <td>3800 мм</td>
            </tr>
            <tr>
              <td>- до нижний обвязки</td>
              <td>1415 мм</td>
            </tr>
            <tr>
              <td>Количество осей</td>
              <td>4 шт</td>
            </tr>
          </tbody>
        </table>
      </WagonsDescription>
      <WagonsDescription header={message('header5')} description={message('description3')} image={'pl'}>
        <table>
          <caption className={'text-bolt text-color-orange'}>Технические характеристики:</caption>
          <tbody>
            <tr>
              <td>Модель вагона</td>
              <td><strong>13-2114</strong></td>
            </tr>
            <tr>
              <td colSpan={2}>Грузоподъемность</td>
            </tr>
            <tr>
              <td>- при равномерно распределенном грузе</td>
              <td>72 т</td>
            </tr>
            <tr>
              <td>- при равномерно распределенном грузе посередине боковых балок на длине 4.3 м</td>
              <td>45 т</td>
            </tr>
            <tr>
              <td>- при равномерно распределенном грузе на длине 3 м посередине</td>
              <td>60 т</td>
            </tr>
            <tr>
              <td>Масса тары вагона</td>
              <td>22 т</td>
            </tr>
            <tr>
              <td>Площадь пола</td>
              <td>38.45 м<sup>2</sup></td>
            </tr>
            <tr>
              <td>Статическая нагрузка</td>
              <td>230.5 кН (23.5 тс)</td>
            </tr>
            <tr>
              <td>Скорость конструкционная</td>
              <td>120 км/ч</td>
            </tr>
            <tr>
              <td>База вагона</td>
              <td>9720 мм</td>
            </tr>
            <tr>
              <td colSpan={2}>Длина</td>
            </tr>
            <tr>
              <td colSpan={2}>- по осям сцепления автосцепок 14620 мм</td>
            </tr>
            <tr>
              <td colSpan={2}>- по концевым балкам рамы 13400 мм</td>
            </tr>
            <tr>
              <td>Ширина максимальная</td>
              <td>2870 мм</td>
            </tr>
            <tr>
              <td colSpan={2}>Высота от уровня верха головок рельсов</td>
            </tr>
            <tr>
              <td>- максимальная</td>
              <td>1810 мм</td>
            </tr>
            <tr>
              <td>- до уровня пола</td>
              <td>1300 мм</td>
            </tr>
            <tr>
              <td>Количество осей</td>
              <td>4 шт</td>
            </tr>
            <tr>
              <td>Модель тележки</td>
              <td>18-100</td>
            </tr>
            <tr>
              <td>Наличие переходной площадки</td>
              <td>нет</td>
            </tr>
            <tr>
              <td>Наличие стояночного тормоза</td>
              <td>есть</td>
            </tr>
            <tr>
              <td>Год постановки на серийное производство</td>
              <td>2001</td>
            </tr>
            <tr>
              <td>Возможность установки буфера</td>
              <td>нет</td>
            </tr>
          </tbody>
        </table>
      </WagonsDescription>
      <WagonsDescription header={message('header6')} description={message('description4')} image={'kvh'}>
        <table>
          <caption className={'text-bolt text-color-orange'}>Технические характеристики:</caption>
          <tbody>
            <tr>
              <td>Модель вагона</td>
              <td><strong>15-150</strong></td>
            </tr>
            <tr>
              <td>Грузоподъемность</td>
              <td>67 т</td>
            </tr>
            <tr>
              <td>Масса тары вагона</td>
              <td>18.5 т</td>
            </tr>
            <tr>
              <td colSpan={2}>Нагрузка</td>
            </tr>
            <tr>
              <td>- статическая осевая</td>
              <td>209.0 кН (21.37 тс)</td>
            </tr>
            <tr>
              <td>- погонная</td>
              <td>70.27 кН/м (7.17 тс/м)</td>
            </tr>
            <tr>
              <td>Скорость конструкционная</td>
              <td>120 км/ч</td>
            </tr>
            <tr>
              <td>База вагона</td>
              <td>7700 мм</td>
            </tr>
            <tr>
              <td colSpan={2}>Длина</td>
            </tr>
            <tr>
              <td>- по осям сцепления автосцепок</td>
              <td>11920 мм</td>
            </tr>
            <tr>
              <td>- по концевым балкам рамы (длина рамы)</td>
              <td>10700 мм</td>
            </tr>
            <tr>
              <td>Ширина максимальная</td>
              <td>3278 мм</td>
            </tr>
            <tr>
              <td colSpan={2}>Высота от уровня верха головок рельсов</td>
            </tr>
            <tr>
              <td>- максимальная</td>
              <td>4180 мм</td>
            </tr>
            <tr>
              <td>- до разгрузочных устройств</td>
              <td>315 мм</td>
            </tr>
            <tr>
              <td>Количество осей</td>
              <td>4 шт</td>
            </tr>
            <tr>
              <td>Модель 2-осной тележки</td>
              <td>18-100</td>
            </tr>
            <tr>
              <td>Наличие переходной площадки</td>
              <td>есть</td>
            </tr>
            <tr>
              <td>Наличие переходной площадки с ручным тормозом</td>
              <td>нет</td>
            </tr>
            <tr>
              <td>Наличие стояночного тормоза</td>
              <td>есть</td>
            </tr>
            <tr>
              <td>Объем кузова</td>
              <td>55 м<sup>3</sup></td>
            </tr>
            <tr>
              <td colSpan={2}>Длина</td>
            </tr>
            <tr>
              <td>- по верхней обвязке</td>
              <td>8110 мм</td>
            </tr>
            <tr>
              <td>- кузова внутри (по верху)</td>
              <td>7910 мм</td>
            </tr>
            <tr>
              <td colSpan={2}>Ширина максимальная</td>
            </tr>
            <tr>
              <td>- по крыше</td>
              <td>3278 мм</td>
            </tr>
            <tr>
              <td>- по стойкам</td>
              <td>3240 мм</td>
            </tr>
            <tr>
              <td colSpan={2}>Количество люков</td>
            </tr>
            <tr>
              <td>- загрузочных</td>
              <td>4 шт</td>
            </tr>
            <tr>
              <td>- разгрузочных</td>
              <td>4 шт</td>
            </tr>
            <tr>
              <td colSpan={2}>Размеры люка в свету</td>
            </tr>
            <tr>
              <td>- загрузочных</td>
              <td>? 621 мм</td>
            </tr>
            <tr>
              <td>- разгрузочных</td>
              <td>500х400 мм</td>
            </tr>
            <tr>
              <td>Угол наклона торцовых стенок бункеров</td>
              <td>50°</td>
            </tr>
            <tr>
              <td>Год постановки на серийное производство</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Возможность установки буферов</td>
              <td>нет</td>
            </tr>
          </tbody>
        </table>
      </WagonsDescription>
      <OurAdvantages />
    </PageWithAsideMenu>
  )
}

export default ProvisionOfWagons
