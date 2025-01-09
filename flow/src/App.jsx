import React from 'react'
import Navbar from './Navbar'
import Button from './Button'
import Title from './Title'
import Card from './Card'
import './App.css'

function App() {
  return (
    <>
    <div className="nav">
    <Navbar></Navbar>
    <Button name='learn' btname='learn' link='learn'></Button>
    </div>
    <div className="landingPage">
    <img src="src/assets/blueflower.png" alt="flower" style={{marginLeft:'68vw', transform: 'rotate(-24deg)', position: 'absolute', width:'30vw'}} />
    <Title title='name' header={
    <>
    learn about the art of acupressure to &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span style={{ color: '#BE9F6A', fontStyle:'italic', fontWeight:'600'}}>relax and re-center</span>
    </>
    }></Title>

      <Card cardName='heart'>
      <img src="src/assets/pinkflower.png" alt="flower graphics"/>
      <h1>learn about pressure points</h1>
      </Card>
    
      <Card cardName='ai'>
        <img src="src/assets/yellowflower.png" alt="flower graphics"/>
        <h1>computer vision assisted</h1>
      </Card>

      <Card cardName='wellness'>
        <img src="src/assets/threeflower.png" alt="" />
        <h1>breathe relax and re-center</h1>
      </Card>
    
    </div>
    </>
  )
}

export default App