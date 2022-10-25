import Section2Main from "../../components/Section2Main/Section2Main";
import Section2Second from "../../components/Section2Second/Section2Second";
import "./Home.css";
import React, { useContext, useEffect, useReducer } from "react";
import axios from "axios";
import LoadingBox from "../../components/LoadingBox";
import SearchRecipes from "../../components/searchRecipes/SearchRecipes";
import SearchBox from "../../components/searchBox/SearchBox";
import SearchAll from "../../components/searchAll/SearchAll";
import Footer from "../../components/footer/Footer";
import { Store } from "../../Store";
import { toast } from "react-toastify";
import Header from "../../components/header/Header";

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
  const { state, dispach: ctxDispatch } = useContext(Store);
  const { userReset } = state;

  console.log(userReset.oldUser.token);

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

  return (
    <>
      <Header />

      <main className="main">
        <section>
          <div className="intro">
            <div>
              <span className="left_text">Simple recipes made for you</span>
            </div>
            <div>
              <span className="rigth_text">real, actual, everyday life</span>
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

          <div className="searcBoxAndSearchAll">
            <SearchBox />
            <SearchAll />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
