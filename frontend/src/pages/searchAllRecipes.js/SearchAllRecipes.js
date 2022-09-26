import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import CaruselRecipes from '../../components/caruselRecipes/CaruselRecipes';
import LoadingBox from '../../components/LoadingBox';
import { getError } from '../../utils';

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, recipes: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, errror: action.payload };
    default:
      return state;
  }
};

const SearchAllRecipes = () => {
  const [page, setPage] = useState("1");
  const [limit, setLimit] = useState(4);

  const [{ error, loading, recipes }, dispach] = useReducer(reducer, {
    loading: true,
    error: '',
  });

  useEffect(() => {
    const fetchRecipes = async () => {
      try {

        const { data } = await axios.get(
          `/api/recipes/getAllRecipes?page=${page}&limit=${limit}`
        );
        dispach({ type: 'FETCH_SUCCESS', payload: data.results });
      } catch (err) {
        dispach({ type: 'FETCH_FAIL', payload: getError(error) });
      }
    };
    fetchRecipes();
  }, [page, error,limit]);

 

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <div>
          {recipes.map((recipe,i) => (
            <h1 key={i}>{recipe.name}</h1>
          ))}
        </div>
      )}
      <button onClick={() =>recipes.length===4?setPage(Number(page) +1) :setPage( 1)}>+</button>
      <button onClick={() => setPage(page ==1 ?  page ==1: page - 1)}>-</button>
      
      <CaruselRecipes/>
    </div>
  );
};

export default SearchAllRecipes;
