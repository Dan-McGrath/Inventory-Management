const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: { type: String, required: true, maxLength: 100, minLength: 3 },
});

CategorySchema.virtual("url").get(function () {
  return `/menu/${this._id}`;
});
