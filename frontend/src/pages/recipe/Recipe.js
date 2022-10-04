import React, { useContext, useEffect, useReducer, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import './Recipe.css';
import { Store } from '../../Store';
import Footer from '../../components/footer/Footer';
import Carusel from '../../components/carusel/Carusel';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, recipe: action.payload, loading: false };
    case 'FETCH_FAIL':
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};


const Recipe = () => {
  const params = useParams();
  const { name } = params;

  const [comment,setComment]=useState("")

  const [{ loading, error, recipe }, dispach] = useReducer(reducer, {
    loading: true,
    error: '',
    recipe: [],
  });
  const { state } = useContext(Store);
  const { userInfo } = state;

  useEffect(() => {
    const fetchMainRecipe = async () => {
      try {
        dispach({ type: 'FETCH_REQUEST' });
        const result = await axios.get(`/api/recipes/description/${name}`);
        dispach({ type: 'FETCH_SUCCESS', payload: result.data });
      } catch (error) {
        dispach({ type: 'FETCH_FAIL', payload: error.data });
      }
    };
    fetchMainRecipe();
  }, [name]);



  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Eroror</div>
  ) : (
    <div>
    <div className="section1">
      <div className="mainDiv">
        <div className="imgFeatures">
          <div>
            <img src={recipe.icon} className="recipeImgR" alt='img' />
          </div>
          <div className="featuredLink">
            <div>
              <span className='featuredRecipe'>FEATURED RECIPE:</span>
            </div>
           
              <Link   to={`/recipes/howIsMade/${recipe._id}`}>
              <div className='spanFeature linkFeature'>
                <span>{recipe.featured}</span>
                </div>
              </Link>
           
          </div>
        </div>
        <div className='nameDescription'>
          <div>
            <span className="recipeName">{recipe.name} Recipe</span>
          </div>
          <div>
            <p className='descriptionP'>{recipe.description}</p>
          </div>
        </div>
      </div>
     </div>
     <Carusel/>
     <Footer/>
     </div>
  );
};

export default Recipe;
