import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Petals from './components/petals'
import CenterWhite from './components/CenterWhite'
import Mensajito from './components/Mensajito'
import PetalsSmaller from './components/PetalsSmaller'
function App() {
  
  const [show, setShow] = useState(0)

  const handleButton = () =>{
    setShow(1)
  }
  return (
    <>
    <div className="background">

   
      <div>
        <div className='container'>
          <Petals />
        </div>
        <div className='container'>
          <Petals />
          <CenterWhite/>
          <Petals />
        </div>
        <div className='container'>
          <Petals />
        </div>

      </div>
      <div className='centrar'>

        <div className='tallo'>

        </div>

      </div>

      <div className='mid'>
        {show == 0 && 
(
        <button className="botoncito" onClick={() => handleButton()}>
        </button>
 )       }
        {show == 1 && 
        <Mensajito/>
        }
      </div>
      </div>
    </>
  )
}

export default App
