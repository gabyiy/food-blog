import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoadingBox from '../../components/LoadingBox.js';
import SearchBox from '../../components/searchBox/SearchBox.js';
import { getError } from "../../utils.js"


const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, recipes: action.payload.recipes };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const SearchScreen = () => {

const navigate = useNavigate()
const {search }=useLocation()
const sp= new URLSearchParams(search)

const query = sp.get("query")
    const [{error,loading,recipes},dispach]=useReducer(reducer,{
        error:"",
        loading:true
    })

    useEffect(()=>{
        const fetchData = async()=>{
try{
        const {data} = await axios.get(`/api/recipes/search?query=${query}`)
        dispach({type:"FETCH_SUCCESS",payload :data})
      
}catch(err){
dispach({type:"FETCH_FAIL",payload:getError(error)})
        }
    }
    fetchData() 
    },[query,error])
    
    console.log(recipes);
  return (
  <div>
   {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <h1>{error}</h1>
          ) : (
            <div>
            {recipes.map((recipe)=>(
<h1>{recipe.name}</h1>
            ))}
 </div>
          )}
          <SearchBox/>
  </div>

  )

};

export default SearchScreen;
