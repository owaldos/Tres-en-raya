import React from 'react'
import  '../components/frame.css'

const Frame = (props) => {
  const {m,check,activate,createMessage,turn,setTurn} = props
  const handleClick =(e)=>{
    if(activate){
      let el = e.target
      if(el.classList.length<2){
        setTurn(turn==='X'? 'O':'X') 
        el.classList.add(turn)
        createMessage(3)
      } else createMessage(4)
      check()
    }  
  }       
      
  return (
    <div>
      <div className= 'frame' >
        {m.map((i)=> <div key={i} id={i} className='table' onClick={handleClick} ></div> )}
      </div>
    </div>    
  )
}

export default Frame
