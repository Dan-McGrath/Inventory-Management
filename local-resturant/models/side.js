const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SideSchema = new Schema({
  name: { type: String, required: true, maxLength: 100 },
  price: { type: Number, required: true },
  description: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
});

SideSchema.virtual("url").get(function () {
  return `/menu/${this.category._id}/${this._id}`;
});

module.exports = mongoose.model("Side", SideSchema);
