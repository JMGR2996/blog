import React from 'react'

const SubmitForm = props => (
  <div className={props.classes}>
    <input
      type='submit'
      className={'button ' + props.theme}
      value={props.text}
      disabled={props.disabled}
    />
  </div>
)

export default SubmitForm