import React, {useState} from 'react'
import './Calculation.scss'
import setMessages from '../../helpers/setMessages'
import messages from './Calculation.messages'
import PageTitle from '../../components/PageTitle'
import Page from '../../components/Page'
import {sendEmail} from '../../helpers/sendEmail'
import {Box, TextField, Typography} from '@mui/material'
import Button from '../../components/Button'

const Calculation = () => {
  const classNamePrefix = 'calculation'
  const message = setMessages(messages, 'app.page.calculation.')
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value
    }

    const res = await sendEmail(data)
    window.alert(res.status === 'ok' ? 'Письмо отправлено!' : 'Ошибка!')
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <Page classNamePrefix={classNamePrefix}>
      <PageTitle name={'calculation'} />
      <Box
        component={'form'}
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          maxWidth: 400,
          mx: 'auto',
          mt: 4
        }}
      >
        <Typography variant={'h5'} textAlign={'center'}>
          {message('form.header')}
        </Typography>

        <TextField
          label={message('form.name')}
          name={'name'}
          value={form.name}
          onChange={handleChange}
          required
          fullWidth
        />

        <TextField
          label={message('form.email')}
          name={'email'}
          type={'email'}
          value={form.email}
          onChange={handleChange}
          required
          fullWidth
        />

        <TextField
          label={message('form.message')}
          name={'message'}
          value={form.message}
          onChange={handleChange}
          required
          fullWidth
          multiline
          rows={4}
        />

        <Button
          type={'submit'}
          className={'button-primary'}
        >
          {message('form.button')}
        </Button>
      </Box>
    </Page>
  )
}

export default Calculation