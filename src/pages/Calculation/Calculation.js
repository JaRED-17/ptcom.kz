import React, { useRef, useState } from 'react'
import './Calculation.scss'
import setMessages from '../../helpers/setMessages'
import messages from './Calculation.messages'
import PageTitle from '../../components/PageTitle'
import Page from '../../components/Page'
import { sendEmail } from '../../helpers/sendEmail'
import { Box } from '@mui/material'
import Button from '../../ui/Button'
import TextField from '../../ui/TextField'
import PhoneNumber from '../../ui/PhoneNumber'
import AutocompleteField from '../../ui/AutocompleteField'
import CustomCheckbox from '../../ui/CustomCheckbox'
import Notification from '../../ui/Notification'
import ReCAPTCHA from 'react-google-recaptcha'
import settings from '../../cms/data/settings.json'
import CustomHelmet from '../../components/CustomHelmet'
import PropTypes from 'prop-types'
import UTSNG from '../../cms/data/catalogs/UTSNG.json'
import typeWagons from '../../cms/data/catalogs/typeWagons.json'

const CustomForm = ({ name, header, message, addRef, disabled }) => {
  return (
    <>
      <p className={'text-color-orange text-bolt'}>{message(`form.${header}`)}</p>
      {(settings?.calculationFields?.[name] || []).map((field, index) => {
        if (field.name === 'phone') {
          return (
            <PhoneNumber
              key={index}
              className={'input input-default'}
              label={message(`form.${field.name}`)}
              name={field.name}
              type={field.type}
              disabled={disabled}
              fullWidth={true}
              mandatory={field.mandatory}
              addRef={(name, ref) => addRef(name, ref)}
            />
          )
        }

        if (field.name === 'cargoCodes') {
          return (
            <AutocompleteField
              key={index}
              options={UTSNG.map((option) => `${option.code} ${option.name}`)}
              label={message(`form.${field.name}`)}
              name={field.name}
              type={field.type}
              multiline={field.multiline || false}
              rows={field.rows || 1}
              disabled={disabled}
              mandatory={field.mandatory}
              addRef={(name, ref) => addRef(name, ref)}
            />
          )
        }

        if (field.name === 'weightName') {
          const result = []

          UTSNG.forEach((item) => {
            if (!result.includes(item.name)) {
              result.push(item.name)
            }
          })

          return (
            <AutocompleteField
              key={index}
              options={result.sort((a, b) => a - b)}
              label={message(`form.${field.name}`)}
              name={field.name}
              type={field.type}
              multiline={field.multiline || false}
              rows={field.rows || 1}
              disabled={disabled}
              mandatory={field.mandatory}
              addRef={(name, ref) => addRef(name, ref)}
            />
          )
        }

        if (field.name === 'typeWagons') {
          return (
            <AutocompleteField
              key={index}
              options={typeWagons.map(option => option.type)}
              label={message(`form.${field.name}`)}
              name={field.name}
              type={field.type}
              multiline={field.multiline || false}
              rows={field.rows || 1}
              disabled={disabled}
              mandatory={field.mandatory}
              addRef={(name, ref) => addRef(name, ref)}
              readOnly
            />
          )
        }

        if (field.name === 'policy') {
          return (
            <CustomCheckbox
              key={index}
              label={message(`form.${field.name}`)}
              name={field.name}
              disabled={disabled}
              mandatory={field.mandatory}
              addRef={(name, ref) => addRef(name, ref)}
            />
          )
        }

        return (
          <TextField
            key={index}
            label={message(`form.${field.name}`)}
            name={field.name}
            type={field.type}
            multiline={field.multiline || false}
            rows={field.rows || 1}
            disabled={disabled}
            mandatory={field.mandatory}
            addRef={(name, ref) => addRef(name, ref)}
          />
        )
      })}
    </>
  )
}

CustomForm.propTypes = {
  name: PropTypes.string,
  header: PropTypes.string,
  message: PropTypes.func,
  disabled: PropTypes.bool,
  addRef: PropTypes.func
}

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
        inputsRef[field.name].current.clearError()
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
        <CustomForm
          name={'form1'}
          header={'header1'}
          message={message}
          disabled={sending}
          addRef={(name, ref) => {
            inputsRef[name] = ref
          }}
        />

        <CustomForm
          name={'form2'}
          header={'header2'}
          message={message}
          disabled={sending}
          addRef={(name, ref) => {
            inputsRef[name] = ref
          }}
        />

        <CustomForm
          name={'form3'}
          header={'header3'}
          message={message}
          disabled={sending}
          addRef={(name, ref) => {
            inputsRef[name] = ref
          }}
        />

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