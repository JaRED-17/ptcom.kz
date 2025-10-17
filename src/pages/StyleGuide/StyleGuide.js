import React from 'react'
import './StyleGuide.scss'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import Page from '../../components/Page'
import Button from '../../ui/Button'
import TextField from '../../ui/TextField'
import LanguageSelector from '../../ui/LanguageSelector'

const StyleGuideBlock = ({title, children}) => {
  return (
    <div className={'style-guide__block'}>
      <div className={'style-guide__block-title'}>{title}</div>
      <div className={'style-guide__block-content'}>
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
  const classNamePrefix = 'style-guide'

  return (
    <Page classNamePrefix={classNamePrefix}>
      <Helmet>
        <title>{'Style guide'}</title>
      </Helmet>
      <StyleGuideBlock title={'Colors'}>
        <div className={'color-blocks'}>
          {(() => {
            const getRootCSSVariables = () => {
              const cssVars = []

              for (const sheet of document.styleSheets) {
                try {
                  for (const rule of sheet.cssRules) {
                    if (rule.selectorText === ':root') {
                      for (const prop of rule.style) {
                        if (prop.startsWith('--') && !cssVars.includes(prop)) {
                          cssVars.push(prop)
                        }
                      }
                    }
                  }
                } catch (e) {
                  continue
                }
              }

              return cssVars
            }

            return getRootCSSVariables().map((color, index) => <ColorBlock key={index} name={color} />)
          })()}
        </div>
      </StyleGuideBlock>
      <StyleGuideBlock title={'H block'}>
        <h1>H1 example</h1>
        <h2>H2 example</h2>
        <h3>H3 example</h3>
        <h4>H4 example</h4>
        <h5>H5 example</h5>
        <h6>H6 example</h6>
      </StyleGuideBlock>
      <StyleGuideBlock title={'Tags block'}>
        <p>p example</p>
        <a className={'white-link'} href={'#'}>white link example</a>
        <a className={'grey-link'} href={'#'}>grey link example</a>
        <a className={'orange-link'} href={'#'}>orange link example</a>
      </StyleGuideBlock>
      <StyleGuideBlock title={'Font sizes'}>
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
                      {`${parseFloat((size / 16).toFixed(3))}rem`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        })()}
      </StyleGuideBlock>
      <StyleGuideBlock title={'Buttons block'}>
        <Button
          className={'button-primary'}
          onClick={() => {}}
        >
          {'Button primary'}
        </Button>
        <Button
          className={'button-primary'}
          onClick={() => {}}
          disabled={true}
        >
          {'Button primary disabled'}
        </Button>
        <Button
          className={'button-secondary'}
          onClick={() => {}}
        >
          {'Button secondary'}
        </Button>
        <Button
          className={'button-secondary'}
          onClick={() => {}}
          disabled={true}
        >
          {'Button secondary disabled'}
        </Button>
      </StyleGuideBlock>
      <StyleGuideBlock title={'Inputs block'}>
        <TextField
          label={'Input example'}
          name={'text'}
          type={'text'}
          multiline={false}
          required={false}
        />
        <LanguageSelector />
      </StyleGuideBlock>
    </Page>
  )
}

export default StyleGuide