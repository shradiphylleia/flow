import React from 'react'
import './Title.css'

function Title({header,name}) {
  return (
    <div className={name}>
        <h1>{header}</h1>
    </div>
  )
}

export default Title