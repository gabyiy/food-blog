import Section2Main from "../../components/Section2Main/Section2Main";
import Section2Second from "../../components/Section2Second/Section2Second";
import "./Home.css";
import React, { useEffect, useReducer } from "react";
import axios from "axios";
import LoadingBox from "../../components/LoadingBox";
import SearchRecipes from "../../components/searchRecipes/SearchRecipes";
import SearchBox from "../../components/searchBox/SearchBox";

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

const Home = () => {
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
    <>
      <main className="main">
        <section>
          <div className="intro">
            <div>
              <span className="left_text">Simple recipes made for you</span>
            </div>
            <div>
              <sapn className="rigth_text">real, actual, everyday life</sapn>
            </div>
          </div>
        </section>
        <section className="second_section">
          <div className="container">
            {loading ? (
              <LoadingBox />
            ) : error ? (
              <div>{error}</div>
            ) : (
              <div>
                <div className="section2_main">
                  <Section2Main mainRecipes={recipes} key={recipes.i} />
                </div>
                <Section2Second secondRecipes={recipes} />
              </div>
            )}
          </div>
        
        <div>
          <SearchBox/>
        </div>
        </section>
      </main>
    </>
  );
};

export default Home;
