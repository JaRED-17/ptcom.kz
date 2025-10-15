import React, {useState} from 'react'
import './Calculation.scss'
import setMessages from '../../helpers/setMessages'
import messages from './Calculation.messages'
import PageTitle from '../../components/PageTitle'
import Page from '../../components/Page'
import {sendEmail} from '../../helpers/sendEmail'
import {Box} from '@mui/material'
import Button from '../../ui/Button'
import TextField from '../../ui/TextField'
import Notification from '../../ui/Notification'
import ReCAPTCHA from 'react-google-recaptcha'
import settings from '../../cms/data/settings.json'

const Calculation = () => {
  const classNamePrefix = 'calculation'
  const message = setMessages(messages, 'app.page.calculation.')
  const [successNotification, setSuccessNotification] = useState(false)
  const [errorNotification, setErrorNotification] = useState(false)
  const [warningNotification, setWarningNotification] = useState(false)
  const recaptchaRef = React.useRef()
  const handleSubmit = async (e) => {
    e.preventDefault()
    const recaptchaValue = recaptchaRef.current.getValue()

    if (recaptchaValue || settings.skipCaptchaCheck) {
      const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        subject: message('subject'),
        message: message('email', {
          company: e.target.company.value || '-',
          name: e.target.name.value || '-',
          phone: e.target.phone.value || '-',
          email: e.target.email.value || '-',
          weightName: e.target.weightName.value || '-',
          cargoCodes: e.target.cargoCodes.value || '-',
          packing: e.target.packing.value || '-',
          weight: e.target.weight.value || '-',
          from: e.target.from.value || '-',
          to: e.target.to.value || '-',
          typeWagons: e.target.typeWagons.value || '-',
          message: e.target.message.value || '-',
          dateTime: new Date().toLocaleString('ru-RU')
        })
      }

      const res = await sendEmail(data)
      if (res.status === 'success') {
        setSuccessNotification(true)
      } else {
        setErrorNotification(true)
      }
    } else {
      setWarningNotification(true)
    }
  }

  return (
    <Page classNamePrefix={classNamePrefix}>
      <PageTitle name={'calculation'} />
      <p className={'text-color-gray'}>{message('mandatory')}</p>
      <Box
        component={'form'}
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: 600,
          mx: 'auto',
          mt: 4
        }}
      >
        <p className={'text-color-orange text-bolt'}>{message('form.header1')}</p>
        {(settings?.calculationFields?.form1 || []).map((field, index) => {
          return (
            <TextField
              key={index}
              label={message(`form.${field.name}`)}
              name={field.name}
              type={field.type}
              multiline={field.multiline || false}
              minWidth={field.minWidth}
              maxWidth={field.maxWidth}
              rows={field.rows || 1}
              required={field.mandatory}
            />
          )
        })}

        <p className={'text-color-orange text-bolt'}>{message('form.header2')}</p>
        {(settings?.calculationFields?.form2 || []).map((field, index) => {
          return (
            <TextField
              key={index}
              label={message(`form.${field.name}`)}
              name={field.name}
              type={field.type}
              multiline={field.multiline || false}
              minWidth={field.minWidth}
              maxWidth={field.maxWidth}
              rows={field.rows || 1}
              required={field.mandatory}
            />
          )
        })}

        <p className={'text-color-orange text-bolt'}>{message('form.header3')}</p>
        {(settings?.calculationFields?.form3 || []).map((field, index) => {
          return (
            <TextField
              key={index}
              label={message(`form.${field.name}`)}
              name={field.name}
              type={field.type}
              multiline={field.multiline || false}
              minWidth={field.minWidth}
              maxWidth={field.maxWidth}
              rows={field.rows || 1}
              required={field.mandatory}
            />
          )
        })}

        <div className={'submit-container'}>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={settings?.captchaSiteKey || '1234'}
            onChange={() => {}}
          />

          <Button
            type={'submit'}
            className={'button-secondary'}
          >
            {message('form.button')}
          </Button>
        </div>
      </Box>
      <Notification
        open={successNotification}
        variant={'success'}
        autoHideDuration={5000}
        onClose={() => {
          setSuccessNotification(false)
        }}
      >
        {message('notification.success')}
      </Notification>
      <Notification
        open={errorNotification}
        variant={'error'}
        autoHideDuration={5000}
        onClose={() => {
          setErrorNotification(false)
        }}
      >
        {message('notification.error')}
      </Notification>
      <Notification
        open={warningNotification}
        variant={'warning'}
        autoHideDuration={5000}
        onClose={() => {
          setWarningNotification(false)
        }}
      >
        {message('notification.warning')}
      </Notification>
    </Page>
  )
}

export default Calculation