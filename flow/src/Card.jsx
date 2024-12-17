import React from 'react'
import './Card.css'

function Card({cardName,children}) {
  return (
    <>
    <div className={cardName}>
      {children}
    </div>
    </>
  )
}

export default Card