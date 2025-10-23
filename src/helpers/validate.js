import settings from '../cms/data/settings.json'

const allFieldSettings = [
  ...(settings?.calculationFields?.form1 || []),
  ...(settings?.calculationFields?.form2 || []),
  ...(settings?.calculationFields?.form3 || [])
]

export default {
  weightNameValue: '',
  cargoCodesValue: '',
  getFieldSettingsByName: (name) => {
    return allFieldSettings.filter(field => field.name === name)[0]
  },
  isEmpty: function (field, value) {
    const fieldSettings = this.getFieldSettingsByName(field)

    return !!(fieldSettings.mandatory && value.length === 0)
  },
  basicFieldValidation: function (field, value) {
    const fieldSettings = this.getFieldSettingsByName(field)
    const minWidth = fieldSettings.minWidth
    const maxWidth = fieldSettings.maxWidth

    if (this.isEmpty(field, value)) {
      return {
        error: true,
        errorDetails: {
          errorCode: 'mandatory',
          replacements: {}
        }
      }
    } else if (value.length && value.length < minWidth) {
      return {
        error: true,
        errorDetails: {
          errorCode: 'minWidth',
          replacements: {
            amount: minWidth
          }
        }
      }
    } else if (value.length && maxWidth && value.length > maxWidth) {
      return {
        error: true,
        errorDetails: {
          errorCode: 'maxWidth',
          replacements: {
            amount: maxWidth
          }
        }
      }
    }

    return {
      error: false,
      errorDetails: {}
    }
  },
  validatePhoneOrEmail: function (regex, field, value, errorCode) {
    if (this.isEmpty(field, value)) {
      return {
        error: true,
        errorDetails: {
          errorCode: 'mandatory',
          replacements: {}
        }
      }
    }

    return regex.test(value)
      ? {
        error: false,
        errorDetails: {}
      }
      : {
        error: true,
        errorDetails: {
          errorCode,
          replacements: {}
        }
      }
  },
  validateWeightNameOrCargoCodes: function () {
    return this.weightNameValue && this.cargoCodesValue && this.weightNameValue !== this.cargoCodesValue ? {
      error: true,
      errorDetails: {
        errorCode: 'notTheSame',
        replacements: {}
      }
    } : null
  },
  company: function (value) {
    return this.basicFieldValidation('company', value)
  },
  name: function (value) {
    return this.basicFieldValidation('name', value)
  },
  phone: function (value) {
    const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/

    return this.validatePhoneOrEmail(phoneRegex, 'phone', value, 'wrongPhone')
  },
  email: function (value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return this.validatePhoneOrEmail(emailRegex, 'email', value, 'wrongEmail')
  },
  weightName: function (value) {
    this.weightNameValue = value

    return this.validateWeightNameOrCargoCodes() || this.basicFieldValidation('weightName', value)
  },
  cargoCodes: function (value) {
    this.cargoCodesValue = value.replace(/[0-9]+ /g, '')

    return this.validateWeightNameOrCargoCodes() || this.basicFieldValidation('cargoCodes', value)
  },
  packing: function (value) {
    return this.basicFieldValidation('packing', value)
  },
  weight: function (value) {
    return this.basicFieldValidation('weight', value)
  },
  from: function (value) {
    return this.basicFieldValidation('from', value)
  },
  to: function (value) {
    return this.basicFieldValidation('to', value)
  },
  typeWagons: function (value) {
    return this.basicFieldValidation('typeWagons', value)
  },
  message: function (value) {
    return this.basicFieldValidation('message', value)
  }
}