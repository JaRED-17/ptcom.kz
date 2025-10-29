import React from 'react'
import TextField from '../../ui/TextField'
import PhoneNumber from '../../ui/PhoneNumber'
import AutocompleteField from '../../ui/AutocompleteField'
import Checkbox from '../../ui/Checkbox'
import PropTypes from 'prop-types'
import settings from '../../cms/data/settings.json'
import UTSNG from '../../cms/data/catalogs/UTSNG.json'
import typeWagons from '../../cms/data/catalogs/typeWagons.json'
import railwayStations from '../../cms/data/catalogs/railwayStations.json'

const CalculationForm = ({
  name,
  header,
  message,
  disabled = false,
  addRef = () => {},
  onValidate = () => {}
}) => {
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
              onValidate={onValidate}
            />
          )
        }

        if (field.name === 'from' || field.name === 'to') {
          return (
            <AutocompleteField
              key={index}
              options={railwayStations.map((option) => `${option.code} ${option.name}`)}
              label={message(`form.${field.name}`)}
              name={field.name}
              type={field.type}
              multiline={field.multiline || false}
              rows={field.rows || 1}
              disabled={disabled}
              mandatory={field.mandatory}
              addRef={(name, ref) => addRef(name, ref)}
              onValidate={onValidate}
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
              onValidate={onValidate}
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
            <Checkbox
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

CalculationForm.propTypes = {
  name: PropTypes.string,
  header: PropTypes.string,
  message: PropTypes.func,
  disabled: PropTypes.bool,
  addRef: PropTypes.func,
  onValidate: PropTypes.func
}

export default CalculationForm