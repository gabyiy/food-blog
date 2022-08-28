import React from "react";
import { Link } from "react-router-dom";
import "./Section2Seconds.css";

const Section2Second = ({ secondRecipes }) => {
  return (
    <div className="main_div_second_section container">
      {secondRecipes.slice(4, 15).map((secondRecipe, i) => (
        <div className="img_text" key={i}>
          <Link to={`/recipes/${secondRecipe.name}`}>
            <img className="image" src={secondRecipe.icon} alt="salad" />
          </Link>
          <div className="second_text">
            <span>{secondRecipe.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section2Second;
