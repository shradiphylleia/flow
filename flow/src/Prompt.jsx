import React from 'react'
import Title from './Title'
import './Prompt.css'

function Prompt() {
  return (
    <>
        <div className="greeting">
        <Title title='prompt' header='hi,how are you doing today?'></Title>
        </div>
        <div className="moodlog">
        <textarea className='concernInput' id="concernInput" name="concernInput" rows="10" cols="50" placeholder="Write about your concern here and get a journal prompt to brain dump..."></textarea>
        <img className='imgChill' src="./src/assets/chill.png" alt="chill guy" />
        </div>
    </>
  )
}

export default Prompt