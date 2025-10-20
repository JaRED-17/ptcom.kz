import React, {useRef, useState} from 'react'
import './Calculation.scss'
import setMessages from '../../helpers/setMessages'
import messages from './Calculation.messages'
import PageTitle from '../../components/PageTitle'
import Page from '../../components/Page'
import { sendEmail } from '../../helpers/sendEmail'
import { Box } from '@mui/material'
import Button from '../../ui/Button'
import TextField from '../../ui/TextField'
import Notification from '../../ui/Notification'
import ReCAPTCHA from 'react-google-recaptcha'
import settings from '../../cms/data/settings.json'
import CustomHelmet from '../../components/CustomHelmet'
import validate from '../../helpers/validate'
import PropTypes from 'prop-types'

const CustomForm = ({ name, header, message, addRef }) => {
  return (
    <>
      <p className={'text-color-orange text-bolt'}>{message(`form.${header}`)}</p>
      {(settings?.calculationFields?.[name] || []).map((field, index) => {
        return (
          <TextField
            key={index}
            label={message(`form.${field.name}`)}
            name={field.name}
            type={field.type}
            multiline={field.multiline || false}
            rows={field.rows || 1}
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
  addRef: PropTypes.func
}

const Calculation = () => {
  const classNamePrefix = 'calculation'
  const message = setMessages(messages, 'app.page.calculation.')
  const inputsRef = useRef({})
  const [successNotification, setSuccessNotification] = useState(false)
  const [errorNotification, setErrorNotification] = useState(false)
  const [formErrorNotification, setFormErrorNotification] = useState(false)
  const [warningNotification, setWarningNotification] = useState(false)
  const recaptchaRef = React.useRef()
  const onSubmit = async (e) => {
    e.preventDefault()
    const recaptchaValue = recaptchaRef.current.getValue()
    let formHasError = false

    for (const form in settings.calculationFields) {
      settings.calculationFields[form].forEach(field => {
        if (validate[field.name](e.target[field.name].value).error) {
          inputsRef[field.name].current.onBlur()
          formHasError = true
        }
      })
    }

    if (formHasError) {
      setFormErrorNotification(true)
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
          addRef={(name, ref) => {
            inputsRef[name] = ref
          }}
        />

        <CustomForm
          name={'form2'}
          header={'header2'}
          message={message}
          addRef={(name, ref) => {
            inputsRef[name] = ref
          }}
        />

        <CustomForm
          name={'form3'}
          header={'header3'}
          message={message}
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
        open={formErrorNotification}
        variant={'error'}
        autoHideDuration={5000}
        onClose={() => {
          setFormErrorNotification(false)
        }}
      >
        {message('notification.form.error')}
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