import React, { useEffect, useReducer, useRef } from "react";
import Slider from "react-slick";
import axios from "axios";

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
  console.log(recipes);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: 10,
        }}
      >
        <div style={{ paddingLeft: 10 }}>
          <h1>Recipes</h1>
        </div>
        <div style={{ paddingRight: 10, display: "flex" }}>
          <div
            style={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 7,
              boxShadow: "0 1px 3px rgb(0 0 0/100%)",
              cursor: "pointer",
              marginRight: 10,
            }}
            onClick={() => sliderRef.current.slickPrev()}
          >
            {" "}
            prev
          </div>
          <div
            style={{
              width: 40,
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 7,
              boxShadow: "0 1px 3px rgb(0 0 0/100%)",
              cursor: "pointer",
            }}
            onClick={() => sliderRef.current.slickNext()}
          >
            next
          </div>
        </div>
      </div>
      <div style={{ margin: 30 }}>
        <Slider ref={sliderRef} slidesToShow={4} slidesToScroll={4}>
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
