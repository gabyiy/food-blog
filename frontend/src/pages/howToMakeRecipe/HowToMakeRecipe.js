import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import LoadingBox from "../../components/LoadingBox";
import { Store } from "../../Store";
import MessageBox from '../../components/messageBox/MessageBox.js';


const reducer = (state, action) => {

  const navigate = useNavigate

  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, recipe: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

const HowToMakeRecipe = () => {

  const navigate = useNavigate()
  const { state } = useContext(Store);
  const { userInfo } = state;

  const [comment,setComment]=useState("")
const[name,setName]=useState("")
const [refresh,setRefresh]=useState(false)

const[recipes,setRecipes]=useState([])
  const params = useParams();
  const { _id } = params;



  const [{ loading, error, recipe }, dispach] = useReducer(reducer, {
    loading: true,
    error: "",
    recipe: [],
  });

  useEffect(() => {
    const fetchMainRecipe = async () => {
      try {
        dispach({ type: "FETCH_REQUEST" });
        const result = await axios.get(`/api/recipes/makeRecipe/${_id}`);
        dispach({ type: "FETCH_SUCCESS", payload: result.data });
        setName(userInfo.name)
      } catch (error) {
        dispach({ type: "FETCH_FAIL", payload: error.data });
      }
    };
    fetchMainRecipe();
  }, [_id,error]);



const submitHandler= async(e)=>{
  e.preventDefault()
  try{
const{ data }=await axios.post(`/api/recipes/${_id}/reviews`,{
comment,name
})
  }catch(err){

  }
  
}

console.log(recipe._id);

  return (
    <div>
  {loading ? (
    <LoadingBox></LoadingBox>
  ) : error ? (
    <h1>{error}</h1>
  ) : (
   <div>
    <div>
  {recipe.description}
</div>

   
  
  <div>
  <h2>Reviews</h2>
        {recipe.reviews.length === 0 && (<MessageBox>There is no messages</MessageBox>)}
        <ul>
          {recipe.reviews.map((review)=>(
           <li key={review._id}>
<strong>{review.name}</strong>
<p>{review.createdAt.substring(0, 10)}</p>
<p>{review.comment}</p>
           </li> 
          ))}
          <li>
            {name?
            <form onSubmit={submitHandler}>
<div>
  <h2>Write a comment</h2>
</div>
<div>
  <textarea value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
  
  <button type="submit">Post comment</button>
  
</div>

            </form>
            :<div>You need to login to leave a cmment</div>}
          </li>
        </ul>
  </div>
  </div>
  )}
  </div>
  )
};

export default HowToMakeRecipe;

