import React, {useState} from 'react'
import './Calculation.scss'
import setMessages from '../../helpers/setMessages'
import messages from './Calculation.messages'
import PageTitle from '../../components/PageTitle'
import Page from '../../components/Page'
import {sendEmail} from '../../helpers/sendEmail'
import {Box} from '@mui/material'
import Button from '../../components/Button'
import TextField from '../../components/TextField'
import Notification from '../../components/Notification'
import ReCAPTCHA from 'react-google-recaptcha'

const Calculation = () => {
  const recaptchaRef = React.useRef()
  const classNamePrefix = 'calculation'
  const message = setMessages(messages, 'app.page.calculation.')
  const [form, setForm] = useState({
    company: '',
    name: '',
    phone: '',
    email: '',
    weightName: '',
    cargoCodes: '',
    packing: '',
    weight: '',
    from: '',
    to: '',
    typeWagons: '',
    message: ''
  })
  const [successNotification, setSuccessNotification] = useState(false)
  const [errorNotification, setErrorNotification] = useState(false)
  const [warningNotification, setWarningNotification] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    const recaptchaValue = recaptchaRef.current.getValue()

    if (recaptchaValue) {
      const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        subject: message('subject'),
        message: message('email', {
          company: e.target.company.value,
          name: e.target.name.value,
          phone: e.target.phone.value,
          email: e.target.email.value,
          weightName: e.target.weightName.value,
          cargoCodes: e.target.cargoCodes.value,
          packing: e.target.packing.value,
          weight: e.target.weight.value,
          from: e.target.from.value,
          to: e.target.to.value,
          typeWagons: e.target.typeWagons.value,
          message: e.target.message.value
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
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }
  const form1 = [
    {
      'name': 'company',
      'value': form.company
    },
    {
      'name': 'name',
      'value': form.name
    },
    {
      'name': 'phone',
      'value': form.phone
    },
    {
      'name': 'email',
      'value': form.email
    }
  ]
  const form2 = [
    {
      'name': 'weightName',
      'value': form.weightName
    },
    {
      'name': 'cargoCodes',
      'value': form.cargoCodes
    },
    {
      'name': 'packing',
      'value': form.packing
    },
    {
      'name': 'weight',
      'value': form.weight
    }
  ]
  const form3 = [
    {
      'name': 'from',
      'value': form.from
    },
    {
      'name': 'to',
      'value': form.to
    },
    {
      'name': 'typeWagons',
      'value': form.typeWagons
    },
    {
      'name': 'message',
      'value': form.message
    }
  ]

  return (
    <Page classNamePrefix={classNamePrefix}>
      <PageTitle name={'calculation'} />
      <Box
        component={'form'}
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 1,
          maxWidth: 600,
          mx: 'auto',
          mt: 4
        }}
      >
        <p className={'text-color-orange text-bolt'}>{message('form.header1')}</p>
        {form1.map((field, index) => {
          return (
            <TextField
              key={index}
              label={message(`form.${field.name}`)}
              name={field.name}
              value={field.value}
              onChange={handleChange}
              required
            />
          )
        })}

        <p className={'text-color-orange text-bolt'}>{message('form.header2')}</p>
        {form2.map((field, index) => {
          return (
            <TextField
              key={index}
              label={message(`form.${field.name}`)}
              name={field.name}
              value={field.value}
              onChange={handleChange}
              required
            />
          )
        })}

        <p className={'text-color-orange text-bolt'}>{message('form.header3')}</p>
        {form3.map((field, index) => {
          return (
            <TextField
              key={index}
              label={message(`form.${field.name}`)}
              name={field.name}
              value={field.value}
              onChange={handleChange}
              multiline={form3.length === index + 1}
              rows={form3.length === index + 1 ? 4 : 1}
              required
            />
          )
        })}

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={'6Lc01uMZAAAAAGjxQ9-nEW56O7nOKzcS-TEeSsxd'}
          onChange={() => {}}
        />

        <Button
          type={'submit'}
          className={'button-secondary'}
        >
          {message('form.button')}
        </Button>
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