const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  price: { type: Number, required: true },
  description: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
});

ItemSchema.virtual("categorySlug").get(function () {
  let slug = this.category.name;
  slug.replace(" ", "_");
  return slug;
});

ItemSchema.virtual("slug").get(function () {
  let slug = this.name;
  slug.replace(" ", "_");
  return slug;
});

ItemSchema.virtual("url").get(function () {
  return `/menu/${this.category.slug}/${this.slug}`;
});

ItemSchema.virtual("title").get(function () {
  return this.name.charAt(0).toUpperCase() + this.name.slice(1);
});

module.exports = mongoose.model("Item", ItemSchema);
