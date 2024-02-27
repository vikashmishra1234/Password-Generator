import React, { useState } from "react";
import './style.css'

const Lower = ({setPassword,charactor}) => {
  const [useLower,setUseLower]=useState(true)
  const [useUpper,setUseUpper]=useState(true)
  const [useSymbol,setUseSymbol]=useState(true)
  const [useNumber,setUseNumber]=useState(true)
  const generatePas = ()=>{
    if(charactor<=30){
      let charset = "";
      let Password = ""
      if(useLower) charset += 'qwertyuiopasdfghjklzxcvbnm';
      if(useNumber) charset += "1234567890";
      if(useUpper) charset += 'QWERTYUIOPASDFGHJKLZXCVBNM';
      if(useSymbol) charset += '!@#$%^&*(){}><?/"[}{+=-_] ';
      for(let i=0;i<charactor;i++){
        Password +=charset.charAt(Math.floor(Math.random()*charset.length)) 
      }
      setPassword(Password)
    }
    else{
      setPassword("Choose Password lenght between 10 and 30")
    }

  }
  return (
    <div>
      <div style={{marginBottom:'10px', display: "flex",alignItems:'center' ,fontSize:'19px',justifyContent:'center',gap:'20px' }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Includes lower charactor</label>
          <label>Includes upper charactor</label>
          <label> Includes symbol</label>
          <label> Includes number</label>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap:'10px'
            
          }}
        >
          
        
          <input  type="checkbox" checked={useLower}  onChange={()=>setUseLower(!useLower)}  />
          <input type="checkbox" checked={useUpper}  onChange={()=>setUseUpper(!useUpper)} />
          <input type="checkbox" checked={useSymbol}  onChange={()=>setUseSymbol(!useSymbol)}/>
          <input type="checkbox" checked={useNumber}  onChange={()=>setUseNumber(!useNumber)}/>
        </div>
      </div>
      <div className="btn">
        <button style={{height:"40px",cursor:'pointer'}} onClick={generatePas}>Generate</button>
      </div>
    </div>
  );
};

export default Lower;
