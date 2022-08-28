import express from "express";
import expressAsyncHandler from "express-async-handler";
import Recipe from "../models/recipeModel.js";

const recipeRouter = express.Router();

recipeRouter.get("/", async (req, res) => {
  const recipes = await Recipe.find();
  res.send(recipes);
});

recipeRouter.get("/description/:name", async (req, res) => {
  const productDescription = await Recipe.findOne({
    name: req.params.name,
  });
  if (productDescription) {
    res.send(productDescription);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});

recipeRouter.get("/makeRecipe/:id", async (req, res) => {
  const product = await Recipe.findById(req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not found" });
  }
});
  
const PAGE_SIZE = 3;

recipeRouter.get(
  '/search',
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const pageSize = query.pageSize || PAGE_SIZE;
    const page = query.page || 1;
    const category = query.category || '';
    const rating = query.rating || '';
    const order = query.order || '';
    const searchQuery = query.query || '';

    const queryFilter =
      searchQuery && searchQuery !== 'all'
        ? {
            name: {
              $regex: searchQuery,
              $options: 'i',
            },
          }
        : {};
    const categoryFilter = category && category !== 'all' ? { category } : {};
    const ratingFilter =
      rating && rating !== 'all'
        ? {
            rating: {
              $gte: Number(rating),
            },
          }
        : {};

    const sortOrder =
      order === 'featured'
        ? { featured: -1 }
        : order === 'lowest'
        ? { price: 1 }
        : order === 'highest'
        ? { price: -1 }
        : order === 'toprated'
        ? { rating: -1 }
        : order === 'newest'
        ? { createdAt: -1 }
        : { _id: -1 };

    const recipes = await Recipe.find({
      ...queryFilter,
      ...categoryFilter,
      
      ...ratingFilter,
    })
      .sort(sortOrder)
      .skip(pageSize * (page - 1))
      .limit(pageSize);

    const countProducts = await Recipe.countDocuments({
      ...queryFilter,
      ...categoryFilter,
    
      ...ratingFilter,
    });
    res.send({
      recipes,
      countProducts,
      page,
      pages: Math.ceil(countProducts / pageSize),
    });
  })
);


export default recipeRouter;
