import axios from 'axios';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Carusel from '../../components/carusel/Carusel.js';
import Footer from '../../components/footer/Footer.js';
import LoadingBox from '../../components/LoadingBox.js';
import SearchBox from '../../components/searchBox/SearchBox.js';
import { getError } from '../../utils.js';
import Slider from 'react-slick';
import './SearchScreen.css';
import { PrevBtn } from '../../components/prevNextBtn/PrevBtn.js';
import { NextBtn } from '../../components/prevNextBtn/NextBtn.js';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, recipes: action.payload.recipes,images:action.payload.recipes };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
const SearchScreen = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 2,
  };
  const navigate = useNavigate();
  const { search } = useLocation();
  const sp = new URLSearchParams(search);

  const query = sp.get('query');
  const [{ error, loading, recipes,images }, dispach] = useReducer(reducer, {
    error: '',
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`/api/recipes/search?query=${query}`);
        dispach({ type: 'FETCH_SUCCESS', payload: data });
      } catch (err) {
        dispach({ type: 'FETCH_FAIL', payload: getError(error) });
      }
    };
    fetchData();
  }, [query, error]);

  console.log(images);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div>
          <Slider  className='slickFlexSearch'
          prevArrow={<PrevBtn/>}
          nextArrow={<NextBtn/>}
            autoplay
            autoplaySpeed={2000}
            ref={sliderRef}
            {...settings}
            customPaging={(i) => {
              return <div >
 {/* <img src={images[i]}/> */}
            {/* {images.map((image)=>( */}
          <img className='imgSearchSliderSmall' src={images[i].icon} alt="img"/> 
 
            
            
              </div>
            }}
            dotsClass="slick-dots custom-indicator"
          >
            {recipes.map((recipe) => (

              <div className="mainSliderSearchDiv">
                <div className="secondSliderSearchDiv">
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
            ))}
          </Slider>
        </div>
      )}
      <div className="searchMoreRecipes">
        <p>
          <i className="fa fa-thin fa-clipboard-list"></i>
        </p>
        <h1>More Recipes</h1>
      </div>
      <Carusel />
      <Footer />
    </div>
  );
};

export default SearchScreen;
