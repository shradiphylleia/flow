import React from 'react'
import './Button.css'

function Button({name}) {
  return (
    <div className={name}>
        <a href='/login'>login</a>
    </div>
  )
}

export default Button