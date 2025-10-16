import React from 'react'
import './SiteMenu.scss'
import HamburgerMenu from './HamburgerMenu'
import messages from './SiteMenu.messages'
import setMessages from '../../helpers/setMessages'
import Markdown from '../Markdown'

const SiteMenu = () => {
  const classNamePrefix = 'site-menu'
  const message = setMessages(messages, 'app.siteMenu.links.')

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__mobile`}>
        <HamburgerMenu />
      </div>
      <div className={`${classNamePrefix}__desktop`}>
        <Markdown
          childrenClassName={{target: 'link', className: 'white-link'}}
          text={message('all')}
        />
      </div>
    </div>
  )
}

export default SiteMenu
