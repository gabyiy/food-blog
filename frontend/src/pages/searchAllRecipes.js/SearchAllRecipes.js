import axios from "axios";
import React, { useEffect, useReducer, useRef, useState } from "react";
import Carusel from "../../components/carusel/Carusel";
import LoadingBox from "../../components/LoadingBox";
import { getError } from "../../utils";
import { useMediaQuery } from "react-responsive";
import Footer from "../../components/footer/Footer";
import Slider from "react-slick";
import "./SearchAllRecipes.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, recipes: action.payload };
    case "FETCH_FAIL":
      return { ...state, loading: false, errror: action.payload };
    default:
      return state;
  }
};

//recipes.length === 4 ? setPage(Number(page) + 1) : setPage(1)
//setPage(page == 1 ? page == 1 : page - 1)}>

const SearchAllRecipes = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  const sliderRef = useRef(null);

  const [page, setPage] = useState("1");
  const [limit, setLimit] = useState(4);

  const [{ error, loading, recipes }, dispach] = useReducer(reducer, {
    loading: true,
    error: "",
  });

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const { data } = await axios.get(
          `/api/recipes/getAllRecipes?page=${page}&limit=${limit}`
        );
        dispach({ type: "FETCH_SUCCESS", payload: data.results });
      } catch (err) {
        dispach({ type: "FETCH_FAIL", payload: getError(error) });
      }
    };
    fetchRecipes();
  }, [page, error, limit]);

  const view2 = useMediaQuery({
    query: "(min-width: 950px)",
  });
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div className="sliderMainDiv">
          <div>
            <button onClick={() => sliderRef.current.slickPrev()}>+</button>
          </div>
          <Slider
            className="slider"
            ref={sliderRef}
            {...settings}
            dots={true}
            speed={1000}
          >
            {recipes.map((recipe, i) => (
              <div className="mainDivCaruselSearchAll" key={i}>
                <h1>{recipe.name}</h1>
              </div>
            ))}
          </Slider>
          <div>
            <button onClick={() => sliderRef.current.slickNext()}>-</button>
          </div>
        </div>
      )}
      <div className="buttonsCaruselSearchAll">
        <button onClick={() => sliderRef.current.slickPrev()}>+</button>
        <button onClick={() => sliderRef.current.slickNext()}>-</button>
      </div>
      <div className="h1Div">
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

export default SearchAllRecipes;
