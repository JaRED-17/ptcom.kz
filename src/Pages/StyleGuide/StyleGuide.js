import React from 'react'
import './StyleGuide.scss'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'

const StyleGuideBlock = ({title, children}) => {
  return (
    <div className='style-guide__block'>
      <div className='style-guide__block-title'>{title}</div>
      <div className='style-guide__block-content'>
        {children}
      </div>
    </div>
  )
}

StyleGuideBlock.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}

const ColorBlock = ({ name }) => {
  return (
    <div className={'color-block'}>
      <div className={'color-block__name'}>{name}</div>
      <div className={'color-block__example'} style={{ background: `var(${name})` }} />
    </div>
  )
}

ColorBlock.propTypes = {
  name: PropTypes.string
}

const StyleGuide = () => {
  return (
    <div className='style-guide'>
      <Helmet>
        <title>{'Style guide'}</title>
      </Helmet>
      <StyleGuideBlock title='Colors'>
        <div className={'color-blocks'}>
          {(() => {
            const colors = [
              '--body-background',
              '--body-color',
              '--text-color-white',
              '--text-color-gray',
              '--text-color-orange',
              '--button-primary-color',
              '--button-primary-background',
              '--button-primary-background-hover',
              '--button-primary-border',
              '--button-secondary-color',
              '--button-secondary-background',
              '--button-secondary-background-hover',
              '--custom-button-border',
              '--custom-button-text',
              '--custom-button-background',
              '--custom-button-background-hover',
              '--block-primary-border'
            ]

            return colors.map(color => <ColorBlock name={color} />)
          })()}
        </div>
      </StyleGuideBlock>
      <StyleGuideBlock title='H block'>
        <h1>H1 example</h1>
        <h2>H2 example</h2>
        <h3>H3 example</h3>
        <h4>H4 example</h4>
        <h5>H5 example</h5>
        <h6>H6 example</h6>
      </StyleGuideBlock>
      <StyleGuideBlock title='Tags block'>
        <p>p example</p>
        <a className='white-link' href='#'>white link example</a>
        <a className='grey-link' href='#'>grey link example</a>
        <a className='orange-link' href='#'>orange link example</a>
      </StyleGuideBlock>
      <StyleGuideBlock title='Font sizes'>
        {(() => {
          const arr = []

          for (let i = 10; i <= 30; i++) {
            arr.push(i)
          }

          return (
            <table>
              <thead>
                <tr>
                  <th>{'Font size (px)'}</th>
                  <th>{'Font size (rem)'}</th>
                </tr>
              </thead>
              <tbody>
                {arr.map((size, index) => (
                  <tr key={index}>
                    <td style={{ fontSize: `${size}px` }}>
                      {`Example (${size}px)`}
                    </td>
                    <td>
                      {`${(size / 16).toFixed(3)}rem`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        })()}
      </StyleGuideBlock>
    </div>
  )
}

export default StyleGuide