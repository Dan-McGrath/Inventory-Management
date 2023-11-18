const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    maxLength: 100,
    minLength: 3,
    lowercase: true,
  },
});

CategorySchema.virtual("slug").get(function () {
  let slug = this.name;
  slug.replace(" ", "_");
  return slug;
});

CategorySchema.virtual('title').get(function () {
  return this.name.charAt(0).toUpperCase() + this.name.slice(1);
})

CategorySchema.virtual("url").get(function () {
  return `/menu/${this.slug}`;
});

module.exports = mongoose.model("Category", CategorySchema);
