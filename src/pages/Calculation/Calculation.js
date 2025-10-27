import React, { useRef, useState } from 'react'
import './Calculation.scss'
import setMessages from '../../helpers/setMessages'
import messages from './Calculation.messages'
import PageTitle from '../../components/PageTitle'
import Page from '../../components/Page'
import { sendEmail } from '../../helpers/sendEmail'
import { Box } from '@mui/material'
import Button from '../../ui/Button'
import Notification from '../../ui/Notification'
import ReCAPTCHA from 'react-google-recaptcha'
import settings from '../../cms/data/settings.json'
import CustomHelmet from '../../components/CustomHelmet'
import CustomForm from './CustomForm'

const Calculation = () => {
  const classNamePrefix = 'calculation'
  const message = setMessages(messages, 'app.page.calculation.')
  const inputsRef = useRef({})
  const recaptchaRef = useRef(null)
  const [notification, setNotification] = useState({
    type: '',
    text: ''
  })
  const [sending, setSending] = useState(false)
  const onSubmit = async (e) => {
    e.preventDefault()
    const recaptchaValue = recaptchaRef.current.getValue()
    let formHasError = false

    for (const form in settings.calculationFields) {
      settings.calculationFields[form].forEach(field => {
        if (inputsRef[field.name].current.validateField()?.error) {
          formHasError = true
        }
      })
    }

    if (formHasError) {
      setNotification({
        type: 'error',
        text: message('notification.form.error')
      })
    } else if (recaptchaValue || settings.skipCaptchaCheck) {
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
      setSending(true)
      const res = await sendEmail(data)
      setSending(false)
      if (res.status === 'success') {
        setNotification({
          type: 'success',
          text: message('notification.success')
        })
      } else {
        setNotification({
          type: 'error',
          text: message('notification.error')
        })
      }
    } else {
      setNotification({
        type: 'warning',
        text: message('notification.warning')
      })
    }
  }

  const clearData = () => {
    for (const form in settings.calculationFields) {
      settings.calculationFields[form].forEach(field => {
        inputsRef[field.name].current.clear()
      })
    }
  }

  return (
    <Page classNamePrefix={classNamePrefix}>
      <CustomHelmet page={'calculation'} />
      <PageTitle name={'calculation'} />
      <p className={'text-color-gray'}>{message('mandatory')}</p>
      <Box
        component={'form'}
        onSubmit={onSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: 600,
          mx: 'auto',
          mt: 4
        }}
      >
        {[
          {name: 'form1', header: 'header1' },
          {name: 'form2', header: 'header2' },
          {name: 'form3', header: 'header3' }
        ].map((form, index) => (
          <CustomForm
            key={index}
            name={form.name}
            header={form.header}
            message={message}
            disabled={sending}
            addRef={(name, ref) => {
              inputsRef[name] = ref
            }}
          />
        ))}

        <div className={'submit-container'}>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={settings?.captchaSiteKey || '1234'}
            onChange={() => {}}
          />

          <div className={'submit-container__buttons'}>
            <Button
              className={'button-primary'}
              loading={sending}
              onClick={clearData}
            >
              {message('form.button.clear')}
            </Button>
            <Button
              type={'submit'}
              className={'button-secondary'}
              loading={sending}
            >
              {message('form.button')}
            </Button>
          </div>
        </div>
      </Box>
      <Notification
        open={Boolean(notification.text)}
        variant={notification.type}
        autoHideDuration={5000}
        onClose={() => {
          setNotification({
            type: '',
            text: ''
          })
        }}
      >
        {notification.text}
      </Notification>
    </Page>
  )
}

export default Calculation