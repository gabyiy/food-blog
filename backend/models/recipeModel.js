import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const recipeSchema = new mongoose.Schema(
  {
    icon: { type: String, requried: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    featured: { type: String, required: true },
    numReviews:{type:Number},
    reviews:[reviewSchema]
  },
  {
    timestamps: true,
  }
);

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
