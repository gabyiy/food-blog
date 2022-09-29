import React, { useEffect, useReducer, useRef, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { useMediaQuery } from "react-responsive";

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
  const [view,setView]= useState()

  const view1 = useMediaQuery({
    query: "(min-width: 539px)",
  });
  const view2 = useMediaQuery({
    query: "(min-width: 850px)",
  });
  const view3 = useMediaQuery({
    query: "(min-width: 1170px)",
  });

  if(view3){
    setView(4)
  }else if (view2){
    setView(3)
  }
  const sliderRef = useRef(null);
  const [{ loading, error, recipes }, dispach] = useReducer(reducer, {
    loading: true,
    error: "",
    recipes: [],
  });

  const slide = 1;
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
  console.log(recipes);
  console.log(sliderRef);
  return (
    <div>
      <div className="mainSliderDiv">
        <div className="h1Div">
          <h1>Recipes</h1>
        </div>
        <div className="buttonsCaruselDiv">
          <div
            className="buttonCaruselPrev"
            onClick={() => sliderRef.current.slickPrev()}
          >
            {" "}
            prev
          </div>
          <div
            className="buttonCaruselNext"
            onClick={() => sliderRef.current.slickNext()}
          >
            next
          </div>
        </div>
      </div>
      <div style={{ margin: 30 }}>
      <Slider ref={sliderRef}  slidesToShow={view} slidesToScroll={1}>
          {recipes.map((recipe) => (
            <div style={{ margin: 20 }}>
              <img
                style={{ width: 250, objectFit: "contain", borderRadius: 10 }}
                src={recipe.icon}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carusel;