const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: { type: String, required: true, maxLength: 100, minLength: 3 },
});

CategorySchema.virtual("slug").get(function () {
  let slug = this.name;
  slug.toLowerCase();
  slug.replace(" ", "_");
  return slug;
});

CategorySchema.virtual("url").get(function () {
  return `/menu/${this.slug}s`;
});

module.exports = mongoose.model("Category", CategorySchema);
