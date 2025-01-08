import React from 'react'
import './Navbar.css'
//should be made the parent component in router element but for now prototype
function Navbar() {
  return (
    <div className='navbar'>
    <a href="/">home</a>
    <a href="/about">about</a>
    <a href="/symptoms">try</a>
    </div>
  )
}

export default Navbar