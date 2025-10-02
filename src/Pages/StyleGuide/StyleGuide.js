import React from 'react'
import './StyleGuide.scss'
import PropTypes from 'prop-types'

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

const StyleGuide = () => {
  return (
    <div className='style-guide'>
      <StyleGuideBlock title='Tags block'>
        <h1>H1 example</h1>
        <h2>H2 example</h2>
        <h3>H3 example</h3>
        <h4>H4 example</h4>
        <h5>H5 example</h5>
        <h6>H6 example</h6>
      </StyleGuideBlock>
      <StyleGuideBlock title='H block'>
        <p>p example</p>
        <a href='#'>a example</a>
      </StyleGuideBlock>
      <StyleGuideBlock title='Font sizes'>
        {(() => {
          const arr = []

          for (let i = 10; i <= 30; i++) {
            arr.push(i)
          }

          return (
            <table>
              {arr.map((size, index) => (
                <tr key={index}>
                  <td style={{ fontSize: `${size}px` }}>
                    {`Font site example (${size}px)`}
                  </td>
                  <td>
                    {`${(size / 16).toFixed(3)}rem`}
                  </td>
                </tr>
              ))}
            </table>
          )
        })()}
      </StyleGuideBlock>
    </div>
  )
}

export default StyleGuide