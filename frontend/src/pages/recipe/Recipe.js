import React, { useEffect, useReducer } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Recipe.css";

const reducer = (state, action) => {
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
const Recipe = () => {
  const params = useParams();
  const { name } = params;

  const [{ loading, error, recipe }, dispach] = useReducer(reducer, {
    loading: true,
    error: "",
    recipe: [],
  });

  useEffect(() => {
    const fetchMainRecipe = async () => {
      try {
        dispach({ type: "FETCH_REQUEST" });
        const result = await axios.get(`/api/recipes/description/${name}`);
        dispach({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispach({ type: "FETCH_FAIL", payload: error.data });
      }
    };
    fetchMainRecipe();
  }, [name]);

  console.log(recipe._id);
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Eroror</div>
  ) : (
    <div className="section1">
    <div className="mainDiv">
      <div className="imgFeatures">
        <div>
          <img src={recipe.icon} className="recipeImg"/>
        </div>
        <div className="featuredLink">
        <div>
        <span>FEATURED RECIPE:</span>
        </div>
        <div>
          <Link to={`/recipes/howIsMade/${recipe._id}`}>
       
            <span>{recipe.featured}</span>
          </Link>
          </div>
        </div>
      </div>
      <div>
        <div>
          <span className="recipeName">{recipe.name} Recipe</span>
        </div>
        <div>
          <h1>{recipe.description}</h1>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Recipe;
