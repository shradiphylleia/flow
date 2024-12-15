import React from 'react'
import './Button.css'

function Button(classname,link,name) {
  return (
    <div className={classname}>
        <a href={link}>{name}</a>
    </div>
  )
}

export default Button