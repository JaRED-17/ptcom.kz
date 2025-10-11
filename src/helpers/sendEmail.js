export async function sendEmail (formData) {
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'content-type': 'application/json; charset=UTF-8'
    },
    body: JSON.stringify(formData)
  })

  return response.json()
}