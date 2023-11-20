const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: { type: String, required: true, maxLength: 100, lowercase: true },
  price: { type: String, required: true },
  description: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  instance: { type: Boolean, default: true },
});

ItemSchema.virtual("slug").get(function () {
  let slug = this.name;
  slug.replace(" ", "_");
  return slug;
});

ItemSchema.virtual("url").get(function () {
  return `/menu/${this.category._id}/${this._id}`;
});

ItemSchema.virtual("title").get(function () {
  return this.name
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
    .join(" ");
});

module.exports = mongoose.model("Item", ItemSchema);
