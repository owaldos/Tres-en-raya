import React,{useState} from 'react'
import Frame from './components/frame.jsx'
import './App.css'


function App() {
  const [pointsX,setPointsX]= useState(0)
  const [pointsO,setPointsO]= useState(0)
  const [turn,setTurn]= useState('X')
  const [activate, setActivate] = useState(true)
  const [message, setMessage] = useState('Comienza X')
   
  const m= [1,2,3,4,5,6,7,8,9]
  let timer=""
  
  const check =()=>{
    let a= m.map((i)=>{
      let e = document.getElementById(i)
      return e.classList[1]
    })
    
    if(a[0]&& a[0]===a[1] && a[0]===a[2]){
      winner([0,1,2])
    }else if(a[3] && a[3]===a[4] && a[3]===a[5]){
      winner([3,4,5])
    }else if(a[6] && a[6]===a[7] && a[6]===a[8]){
      winner([6,7,8])
    }else if(a[0] && a[0]===a[3] && a[0]===a[6]){
      winner([0,3,6])
    }else if(a[1] && a[1]===a[4] && a[1]===a[7]){
      winner([1,4,7])
    }else if(a[2] && a[2]===a[5] && a[2]===a[8]){
      winner([2,5,8])
    }else if(a[0] && a[0]===a[4] && a[0]===a[8]){
      winner([0,4,8])
    }else if(a[2] && a[2]===a[4] && a[2]===a[6]){
      winner([2,4,6])
    }else{
      let par=a.filter((i)=>i !== undefined)
      if(par.length=== 9){
        winner()
      } 
    }
  }

  const winner =(d)=>{
    setActivate(false)

    if(d === undefined){
      createMessage(1)  
    }else{
      turn==='X'? setPointsX(pointsX + 1):setPointsO(pointsO + 1)
      createMessage(2)
      d.map((i)=>{
        let el = document.getElementById(m[i])
        el.classList.add('G')
      })

      setPointsX((pointsX)=>{
        if(pointsX===3){
           createMessage(5)
        }
        return pointsX    
      }) 

      setPointsO((pointsO)=>{
        if(pointsO===3){
          createMessage(5)
        }
        return pointsO   
      }) 
    }  
  }   
  
  const createMessage =(type)=>{
    switch(type){
      case 1: setMessage(`Es un empate`)
      break;
      case 2: setMessage(`Un punto para ${turn}`)
      break;
      case 3: setMessage(`Continua ${turn==='X'? 'O':'X'} `)
      break;
      case 4: setMessage(`No puedes cambiar la partida`)
      break;
      case 5: setMessage(` ${turn} ERES EL GANADOR`)
      break;
      case 6: setMessage(`Comienza  ${turn}`)
      break;
      default: console.log('error')
    }
  }
    
  
  const handleClick =()=>{
    if(pointsX===3||pointsO===3){
      setPointsX(0)
      setPointsO(0)
    }
    
    m.map((i)=>{
      let e = document.getElementById(i)
      e.classList.remove('X','O','G')
    })
    setActivate(true)
    createMessage(6)
    
  }

  const handleRestartGame= ()=>{
    setPointsX(0)
    setPointsO(0)
    handleClick()
  }
  

  
  return (
    <>
      <div className='header'>
        <h2> \\\ 3 En Raya \\\</h2>
        <p>{message}</p>
      </div>
      <Frame 
        m={m} check={check} 
        activate ={activate} 
        createMessage ={createMessage}
        turn ={turn}
        setTurn ={setTurn}
      />
      <div className='points'>
        <p className= 'p1'>"x" = {pointsX} </p>
        <p className= 'p2'> "O" = {pointsO} </p>
      </div>
      <div className= 'containerButton'>
        <button  className='b1' onClick={handleClick}>Continuar//Nueva Partida</button>
        <button  className='b2' onClick={handleRestartGame}>restart game</button>
      </div>
      
    </>  
     
  );
}

export default App;
