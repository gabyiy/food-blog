import React from "react";
import { Link } from "react-router-dom";
import "./SearchAll.css";

const SearchAll = () => {
  return (
    <div className="searchAllMainDiv">
      <Link className="searchAllLink" to={`/searchAll`}>
        <p> + VIEW ALL RECIPES</p>
      </Link>
    </div>
  );
};

export default SearchAll;
