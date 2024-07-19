import React from 'react'
import {signOut } from 'firebase/auth'
import { auth } from "../../firebase"

const index = () => {
    const userSignout = () =>{
        signOut(auth).then(()=>{
            console.log("User is Logged Out");
        }).catch(error => console.log(error))
    }
  return (
    <>
    <h1>
        User is loged in at home
        <button onClick={userSignout}>Sign Out</button>
    </h1>
    </>
  )
}

export default index