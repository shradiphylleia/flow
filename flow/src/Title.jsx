import React from 'react'
import './Title.css'

function Title({header,title}) {
  return (
    <div className={title}>
        <h1>{header}</h1>
    </div>
  )
}

export default Title