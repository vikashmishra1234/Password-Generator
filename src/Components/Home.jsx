import React, { useState } from 'react'
import Input from './Input'
import Lower from './Lower'
import './style.css'

const string = 'ABCDEabdfjeiiJSDIEKJMZXAQWqlpodjfhjdkeurj';

const Home = () => {

  const [Password,setPassword]=useState('generate your password');
  const [charactor,setCharactor]= useState(10)


  return (
    <>
    <div className='home'>
      <h2>Password Generator</h2>
      <Input Password = {Password}/>
      <div className='btns'>
        <button onClick={()=>{navigator.clipboard.writeText(Password)}} >Copy</button>
      
      <input type="range" min="10" max="30" value={charactor}  onChange={(e)=>{setCharactor(e.target.value)}} class="slider" id="myRange"/>
      {charactor}

          
      </div>
      <div >

      <Lower charactor={charactor} setPassword={setPassword} />
      </div>

    </div>
    </>
  )
}

export default Home
