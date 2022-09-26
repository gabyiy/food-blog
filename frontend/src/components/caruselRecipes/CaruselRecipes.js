import React, { Component } from "react";
import Slider from "react-slick";
import "./CaruselRecipes.css"
import  { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import LoadingBox from "../../components/LoadingBox";
import SearchRecipes from "../../components/searchRecipes/SearchRecipes";
import SearchBox from "../../components/searchBox/SearchBox";
import SearchAll from "../../components/searchAll/SearchAll";
import Footer from "../../components/footer/Footer";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red",color:"black" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

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

const CaruselRecipes =()=> {



  const [{ loading, error, recipes }, dispach] = useReducer(reducer, {
    loading: false,
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


 
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    
    return (
      <div className="main">
        <h2>Custom Arrows</h2>
        <Slider className="lol" {...settings}>

          <div>
            <h3>1</h3>
          </div>
         
        </Slider>
      </div>
    );
  }
}
export default CaruselRecipes