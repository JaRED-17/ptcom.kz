import React from 'react'
import './Calculation.scss'
// import setMessages from '../../helpers/setMessages'
// import messages from './Calculation.messages'
import PageTitle from '../../components/PageTitle'

const Calculation = () => {
  const classNamePrefix = 'calculation'
  // const message = setMessages(messages, 'app.page.calculation.')

  return (
    <div className={classNamePrefix}>
      <div className={`${classNamePrefix}__content`}>
        <div className={`${classNamePrefix}__content--block`}>
          <PageTitle name={'calculation'} />
        </div>
      </div>
    </div>
  )
}

export default Calculation