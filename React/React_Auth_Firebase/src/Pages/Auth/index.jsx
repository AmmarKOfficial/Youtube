
import './index.css'
import { useState } from 'react'
import Login from '../../Components/Login'
import Register from '../../Components/Register'


const index = () => {

  const [isRegister, setIsRegister] = useState(true)

  const switchState = () =>{
    setIsRegister(!isRegister)
    console.log(isRegister)
  }
  
  return (
    <>
    {
      isRegister ? (<Login changeState={switchState} />) : (<Register changeState={switchState}/>)
    }

    </>
  )
}

export default index