const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EntreeInstanceSchema = new Schema({
  entree: { type: Schema.Types.ObjectId, ref: "Entree", required: true },
  made: { type: Date, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Expired"],
    default: "Available",
  },
});

EntreeInstanceSchema.virtual("slug").get(function () {
  let slug = this.name;
  slug.replace(" ", "_");
  return slug;
});

EntreeInstanceSchema.virtual("categorySlug").get(function () {
  let slug = this.category.name;
  slug.replace(" ", "_");
  return slug;
});

EntreeInstanceSchema.virtual("url").get(function () {
  return `/menu/${this.entree.category._id}/entreeinstance/${this._id}`;
});

module.exports = mongoose.model("EntreeInstance", EntreeInstanceSchema);
