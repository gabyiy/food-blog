import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import LoadingBox from "../../components/LoadingBox";
import { Store } from "../../Store";
import MessageBox from "../../components/messageBox/MessageBox.js";
import "./HowToMakeRecipe.css";

const reducer = (state, action) => {
  const navigate = useNavigate;

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
  const navigate = useNavigate();
  const { state } = useContext(Store);
  const { userInfo } = state;

  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [refresh, setRefresh] = useState(false);

  const [recipes, setRecipes] = useState([]);
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
        setName(userInfo.name);
      } catch (error) {
        dispach({ type: "FETCH_FAIL", payload: error.data });
      }
    };
    fetchMainRecipe();
  }, [_id, error, refresh]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`/api/recipes/${_id}/reviews`, {
        comment,
        name,
      });
      setRefresh((refresh) => !refresh);
    } catch (err) {}
    setComment("");
  };
  console.log();

  return (
  
      <div className="mainContainer">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          <div className="mai">
            <div>
              <p className="title">{recipe.featured}</p>
            </div>
            {recipe.recipeDetails.map((detail) => (
              <div key={detail._id}>
                <div className="firstTextFirstImg entry-content italic">
                  <p>{detail.firstTextFirstImg}</p>
                </div>
                <a href="#recipe">
                  <div className="jumpRecipe">
                    <i class="fa fa-light fa-arrow-down"></i>
                    <p>JUMP TO RECIPE</p>
                  </div>
                </a>

                <div className="allImg">
                  <img src={detail.firstImg} alt="pasta" />
                </div>
                {recipe.reviews.length ? (
                  <div className="featuredReview">
                    <div className="featuredComment">
                      <p>FEATURED COMMENT :</p>
                      <h5>{recipe.reviews.slice(-1)[0].name}</h5>
                    </div>
                    <div className="comment">
                      <p> {recipe.reviews.slice(-1)[0].comment} </p>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <div className="hrSeparator">
                  <hr></hr>
                </div>
                <div className="firstTextSecondImg">
                  <p>{detail.firstTextSecondImg}</p>
                  <p>{detail.secondTextSecondImg}</p>
                  <p>{detail.secondTextFirstImg}</p>
                </div>
                <div className="allImg">
                  <img src={detail.secondImg} alt="secondIng" />
                </div>
                <div id="recipe">
                  <div className="saladTipe">
                    {/* <div className="recipeImg">
                      <img src={detail.secondImg} alt="secondImg" />
                    </div> */}
                    <p>{recipe.featured}</p>
                    <hr></hr>
                    <div className="timeYeld">
                      <p>
                        <i class="fa fa-thin fa-clock"></i> TOTAL TIME:{" "}
                        <span>{detail.makingTime}</span>{" "}
                      </p>
                      <p>
                        {" "}
                        <i class="fa fa-thin fa-utensils"></i> YELD:{" "}
                        <span> {detail.yeld}</span>
                      </p>
                    </div>
                  </div>
                  <div className="recipeIngredient">
                    <p>{detail.makingDescription}</p>
                    <hr></hr>
                    <div className="ingredients">
                      <p>INGREDIENTS</p>
                      {detail.ingredients.map((ingredient) => (
                        <ul className="ulForIngredients" key={ingredient._id}>
                          <li>
                            <span>{ingredient}</span>
                          </li>
                        </ul>
                      ))}
                    </div>
                    <hr></hr>
                    <div className="instructionDiv">
                      <p>INSTRUCTIONS</p>
                      {detail.instructions.map((instruction) => (
                        <ol key={instruction._id}>
                          <li key={instruction._id}>
                            <span>{instruction}</span>
                          </li>
                        </ol>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div>
              <h2>Reviews</h2>
              {recipe.reviews.length === 0 && (
                <MessageBox>
                  <p className="noMessageBox"> There are no reviews</p>
                </MessageBox>
              )}
              <ul className="ulReviews">
                {recipe.reviews.map((review) => (
                  <li key={review._id}>
                    <strong className="reviewName">{review.name}</strong>
                    <p className="revviewComment">{review.comment}</p>
                    <p className="reviewCreateAt">
                      {review.createdAt.substring(0, 10)}
                    </p>
                  </li>
                ))}
                <li>
                  {name ? (
                    <div className="formDiv">
                      <form onSubmit={submitHandler}>
                        <div className="h2FormDiv">
                          <h2>Write a review</h2>
                        </div>
                        <div>
                          <textarea
                            className="textArea"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                          ></textarea>
                        </div>
                        <div className="divButtonCommit">
                          <button type="submit" className="buttonComment">
                            POST COMMENT
                          </button>
                        </div>
                      </form>
                    </div>
                  ) : (
                    <div>You need to login to leave a cmment</div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
  );
};

export default HowToMakeRecipe;
