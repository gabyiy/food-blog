import express from "express";
import data from "../data.js";
import Recipe from "../models/recipeModel.js";
import User from "../models/userModel.js";

const seedRouter = express.Router();

seedRouter.get("/", async (req, res) => {
  await Recipe.remove({});  
  await User.remove({});
  const createdRecipes = await Recipe.insertMany(data.recipes);
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdRecipes, createdUsers });
});

export default seedRouter;
