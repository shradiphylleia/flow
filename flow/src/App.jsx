import React from 'react'
import Navbar from './Navbar'
import Button from './Button'
import Title from './Title'

function App() {
  return (
    <>
    <div className="nav">
    <Navbar></Navbar>
    <Button className='signUp' link='/signup' name='Login'></Button>
    </div>
    <div className="landingPage">
    <img src="src/assets/blueflower.png" alt="flower" style={{marginLeft:'68vw', transform: 'rotate(-24deg)', position: 'absolute', width:'30vw'}} />
    <Title className='landingTitle' header={
    <>
    learn about the art of accupressure to &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style={{ color: '#BE9F6A', fontStyle:'italic', fontWeight:'600'}}>relax and re-center</span>
    </>
    }></Title>
    </div>
    </>
  )
}

export default App