import React from 'react'
import PropTypes from 'prop-types'
import './Textarea.scss'

/**
 * This is a react component that represents a text field for writing long paragraphs.
 */

const Textarea = props => (
  <div>
    <label className=''>{props.label}</label>
    <textarea
      cols='30'
      rows='15'
      value={props.value}
      id={props.id}
      className={'input ' + props.theme}
      type={props.type}
      minLength={props.minLength}
      name={props.name}
      placeholder={props.placeholder}
      required={props.required}
      defaultValue={props.default}
      disabled={props.disabled}
      ref={props.ref}
    />
  </div>
)

Textarea.propTypes = {
  classes: PropTypes.string,
  label: PropTypes.string,
  minLength: PropTypes.number,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  defaultValue: PropTypes.string,
  autoComplete: PropTypes.bool,
  value: PropTypes.string,
  theme: PropTypes.string
}

export default Textarea
