import React, { useEffect, useReducer, useRef, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import Footer from "../footer/Footer"
import { useMediaQuery } from "react-responsive";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import "./Carusel.css"
import { Link } from "react-router-dom";
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, recipes: action.payload, loading: false };
    case "FETCH_FAIL":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

const Carusel = () => {
  const [showScroll,setShowScroll]= useState()

  const view1 = useMediaQuery({
    query: "(min-width: 539px)",
  });
  const view2 = useMediaQuery({
    query: "(min-width: 850px)",
  });
  const view3 = useMediaQuery({
    query: "(min-width: 1170px)",
  });
useEffect(()=>{
  if(view3){
    setShowScroll(6) 
  }else if (view2){
    setShowScroll(3)
  }else if(view1) (
    setShowScroll(1)
  )
},[view3,view2,view1])

  const sliderRef = useRef(null);
  const [{ loading, error, recipes }, dispach] = useReducer(reducer, {
    loading: true,
    error: "",
    recipes: [],
  });

  useEffect(() => {
    const fetchMainRecipe = async () => {
      dispach({ type: "FETCH_REQUEST" });

      try {
        const result = await axios.get("/api/recipes");
        dispach({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispach({ type: "FETCH_FAIL", payload: error.data });
      }
    };
    fetchMainRecipe();
  }, []);
  console.log(sliderRef);
  return (
    <div className="caruselPageDiv">
      <div className="mainSliderDiv">
        <div className="h1Div">
        <p><i class="fa fa-thin fa-clipboard-list"></i></p>
          <h1>More Recipes</h1>

        </div>

      </div>
      <div className="sliderDiv">
      <Slider ref={sliderRef}  slidesToShow={showScroll} slidesToScroll={showScroll} dots={true} speed={500} rows={1} className="slider">
          {recipes.map((recipe) => (
            <Link to={`/recipes/${recipe.name}`}>
            <div className="mainCaruselMap">
            <div className="imgContainerCarusel">
              <img className="imgCarusel"
         
                src={recipe.icon}
              />
              </div>
              <div className="carsuelRecipeName">
                <p>{recipe.name}</p>
              </div>
            </div>
            </Link>
          ))}
        </Slider>
        <div className="buttonsCaruselDiv">
          <div
            className="buttonCaruselPrev"
            onClick={() => sliderRef.current.slickPrev()}
          >
            {" "}
  
        <ArrowBackIosIcon/>
          </div>
          <div
            className="buttonCaruselNext"
            onClick={() => sliderRef.current.slickNext()}
          >   
          <ArrowForwardIosIcon/> 
          </div>
        </div>
        
      </div>
   
    </div>
  );
};

export default Carusel;
