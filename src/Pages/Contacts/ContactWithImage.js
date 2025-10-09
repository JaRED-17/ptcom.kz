import React from 'react'
import './ContactWithImage.scss'
import PropTypes from 'prop-types'

const ContactWithImage = ({ image, title, contact }) => {
  return (
    <div className={'contact-with-image'}>
      <div className={'contact-with-image__image--block'}>
        <img className={'contact-with-image__image'} src={`../../../media/images/icons/${image}.png`} alt={''} />
      </div>
      <div className={'contact-with-image__text--block'}>
        <div className={'contact-with-image__title'}>
          {title}
        </div>
        <p className={'contact-with-image__contact'}>
          {contact}
        </p>
      </div>
    </div>
  )
}

ContactWithImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  contact: PropTypes.string
}

export default ContactWithImage