import React from 'react'
import './ContactBlock.scss'
import PropTypes from 'prop-types'
import Markdown from '../../components/Markdown'

const ContactBlock = ({ name, position, contact }) => {
  return (
    <div className={'contact-block'}>
      <img className={'contact-block__icon'} src={`../../../media/icons/contact.png`} alt='' />
      <div className={'contact-block__name'}>
        {name}
      </div>
      <p className={'contact-block__position'}>
        {position}
      </p>
      <div className={'contact-block__contact'}>
        <Markdown childrenClassName={{target: 'link', className: 'white-link'}} text={contact} />
      </div>
    </div>
  )
}

ContactBlock.propTypes = {
  name: PropTypes.string,
  position: PropTypes.string,
  contact: PropTypes.string
}

export default ContactBlock