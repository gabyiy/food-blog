import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchBox.css";
const SearchBox = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const submitHandler = (e) => {

    e.preventDefault();
    
}

const search =(evt)=>{
if(evt.key==="Enter"){

  navigate(`/search/?query=${query}`);
  setQuery("")
}
}
  console.log(query);
  return (
    <div className="formDivSearch">
      <form onSubmit={submitHandler} className="formSearch">
        <input
          className="inputSearch"
          onChange={e => setQuery(e.target.value)}
  
  value={query}
  
  onKeyPress={search}
          placeholder="Search Recipe"
        />
      
      </form>
      <div>
        <p className="orForm">or</p>
      </div>
    </div>
  );
};

export default SearchBox;
