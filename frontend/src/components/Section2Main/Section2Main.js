import { Link } from "react-router-dom";
import "./Section2Main.css";

const Section2Main = ({ mainRecipes, i }) => {
  return (
    <div className="link_class" style={{ textDecoration: "none" }}>
      {mainRecipes.slice(0, 4).map((mainRecipe, i) => (
        <div className="info" key={i}>
          <Link to={`/recipes/${mainRecipe.name}`}>
            <img className="fit_img" src={mainRecipe.icon} alt="salad" />
          </Link>
          <div className="text-wrapper">
            <Link to={`/recipes/${mainRecipe.name}`}>
              <div className="text">
                <span className="gg">{mainRecipe.name}</span>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section2Main;
