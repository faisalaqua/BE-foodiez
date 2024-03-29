const mongoose = require("mongoose");
const mongooseSlugPlugin = require("mongoose-slug-plugin");

const RecipeSchema = mongoose.Schema(
  {
    name: String,
    image: String,
    recipe: String,
    // we can make the ingredients inside the Recipe as array or we can add them as string separate
    ingredients: String,
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  },
  {
    timestamps: true,
  }
);

// REVIEW: Again, this line is for slugs, you actually need a slug for your recipes
RecipeSchema.plugin(mongooseSlugPlugin, { tmpl: "<%=name%>" });

module.exports = mongoose.model("Recipe", RecipeSchema);
