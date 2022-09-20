import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBox.css";
const SearchBox = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    navigate(`/search/?query=${query}`);
  };
  return (
    <div className="formDivSearch">
      <form onSubmit={submitHandler} className="formSearch">
        <input
          className="inputSearch"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Recipe"
        />
        <button type="submit" className="btnSearch">
          <i class="fa fa-2x fa-search" aria-hidden="true"></i>
        </button>
      </form>
      <div>
        <p className="orForm">or</p>
      </div>
    </div>
  );
};

export default SearchBox;
