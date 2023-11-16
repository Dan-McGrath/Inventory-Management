const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  price: { type: Number, required: true },
  description: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
});

DrinkSchema.virtual("slug").get(function () {
  let slug = this.name;
  slug.replace(" ", "_");
  return slug;
});

DrinkSchema.virtual("categorySlug").get(function () {
  let slug = this.category.name;
  slug.replace(" ", "_");
  return slug;
});

DrinkSchema.virtual("url").get(function () {
  return `/menu/${this.category._id}/${this._id}`;
});

module.exports = mongoose.model("Drink", DrinkSchema);
