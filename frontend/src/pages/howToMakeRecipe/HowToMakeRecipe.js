import React, { useEffect, useReducer } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

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

const HowToMakeRecipe = () => {
  const params = useParams();
  const { _id } = params;

  const [{ loading, error, recipe }, dispach] = useReducer(reducer, {
    loading: true,
    error: "",
    recipe: [],
  });

  useEffect(() => {
    const fetchMainRecipe = async () => {
      try {
        dispach({ type: "FETCH_REQUEST" });
        const result = await axios.get(`/api/recipes/makeRecipe/${_id}`);
        dispach({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (error) {
        dispach({ type: "FETCH_FAIL", payload: error.data });
      }
    };
    fetchMainRecipe();
  }, [_id]);
  return <div>{recipe.featured}</div>;
};

export default HowToMakeRecipe;
