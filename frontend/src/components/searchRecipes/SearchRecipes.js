import axios from 'axios'
import React, { useState } from 'react'

const SearchRecipes = () => {

    const [search,setSearch]=useState("")
    const   submitHandler= async(e)=>{
        e.preventDefault()
        try{
const {data}=  await axios.post("/api/recipes/search",{
    search
})
console.log(data);
        }catch(error){

        }
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <input onChange={(e)=>setSearch( e.target.value)}/>
        </form>
    </div>
  )
}

export default SearchRecipes