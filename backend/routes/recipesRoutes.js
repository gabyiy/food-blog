import express from "express";
import expressAsyncHandler from "express-async-handler";
import Recipe from "../models/recipeModel.js";

const recipeRouter = express.Router();

recipeRouter.get("/", expressAsyncHandler(async (req, res) => {
  const recipes = await Recipe.find();
  res.send(recipes);

}));

function paginatedResults(model) {
  return async (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if (endIndex < (await model.countDocuments().exec())) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    try {
      results.results = await model.find().limit(limit).skip(startIndex).exec();
      res.paginatedResults = results;
      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
}

recipeRouter.get("/getAllRecipes", paginatedResults(Recipe), (req, res) => {
  res.send(res.paginatedResults);
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
  "/search",
  expressAsyncHandler(async (req, res) => {
    const { query } = req;
    const pageSize = query.pageSize || PAGE_SIZE;
    const page = query.page || 1;
    const category = query.category || "";
    const rating = query.rating || "";
    const order = query.order || "";
    const searchQuery = query.query || "";

    const queryFilter =
      searchQuery && searchQuery !== "all"
        ? {
            name: {
              $regex: searchQuery,
              $options: "i",
            },
          }
        : {};
    const categoryFilter = category && category !== "all" ? { category } : {};
    const ratingFilter =
      rating && rating !== "all"
        ? {
            rating: {
              $gte: Number(rating),
            },
          }
        : {};

    const sortOrder =
      order === "featured"
        ? { featured: -1 }
        : order === "lowest"
        ? { price: 1 }
        : order === "highest"
        ? { price: -1 }
        : order === "toprated"
        ? { rating: -1 }
        : order === "newest"
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

recipeRouter.post(
  "/:id/reviews",

  expressAsyncHandler(async (req, res) => {
    const recipeId = req.params.id;

    const recipe = await Recipe.findById(recipeId);

    if (recipe) {
      // if (recipe.reviews.find((x) => x.name === req.user.name)) {
      //   return res
      //     .status(400)
      //     .send({ message: 'You already submitted a review' });
      // }
      const review = {
        name: req.body.name,
        comment: req.body.comment,
      };
      recipe.reviews.push(review);
      recipe.numReviews = recipe.reviews.length;

      const updateRecipe = await recipe.save();
      res.status(201).send({
        message: "Review Created",
        review: updateRecipe.reviews[updateRecipe.reviews.length - 1],
      });
    } else {
      res.status(404).send({ message: "Recipe Not Found" });
    }
  })
);
export default recipeRouter;
