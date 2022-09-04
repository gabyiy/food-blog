import axios from 'axios'
import React, { useState } from 'react'

const RecoverPassword = () => {
  const [email,setEmail]=useState("")
  const [key,setKey]=useState("")


  const submitHandler= async(e)=>{
    e.preventDefault()

    const {data}= await axios.post("/api/users/forgot-password",{
    email
    }
    )
    setKey(data)
  }
  console.log(email);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input onChange={(e)=>setEmail(e.target.value)}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default RecoverPassword