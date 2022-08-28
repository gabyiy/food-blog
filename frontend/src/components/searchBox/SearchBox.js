import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SearchBox = () => {

    const navigate = useNavigate()
    const [query,setQuery]=useState("")

    const submitHandler=(e)=>{
        e.preventDefault()
navigate(`/search/?query=${query}`)
    }
  return (
    <div>
    <form onSubmit={submitHandler}>
        <input onChange={(e)=>setQuery(e.target.value)}/>
        <button type='submit'>Search</button>
    </form>
    </div>
  )
}

export default SearchBox