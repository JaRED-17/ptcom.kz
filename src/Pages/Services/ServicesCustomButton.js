import React from 'react'
import './ServicesCustomButton.scss'
import PropTypes from 'prop-types'
import withRoute from '../../helpers/withRoute'

const ServicesCustomButton = ({ navigate, icon, text, to }) => {
  return (
    <div
      className={'services__custom-button'}
      onClick={() => {
        navigate(to)
      }}
    >
      <img className={'services__custom-button-icon'} src={`../../../media/images/icons/${icon}.png`} alt={''} />
      <div className={'services__custom-button-text'}>
        {text}
      </div>
    </div>
  )
}

ServicesCustomButton.propTypes = {
  navigate: PropTypes.object,
  icon: PropTypes.string,
  text: PropTypes.string,
  to: PropTypes.string
}

export default withRoute(ServicesCustomButton)