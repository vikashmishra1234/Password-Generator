import React from 'react'
import './style.css'

const Input = ({Password}) => {
  return (
    <div  style={{margin:'auto',color:'black',height:'10vh',width:'85%',backgroundColor:'#f3ecec'}}>

    <p id='output'  style={{fontSize:'19px',textAlign:'center'}}>
        {Password}
    </p>
    </div>
  )
}

export default Input
