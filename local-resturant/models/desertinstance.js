const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DesertInstanceSchema = new Schema({
  desert: { type: Schema.Types.ObjectId, ref: "Desert", required: true },
  made: { type: Date, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Expired"],
    default: "Available",
  },
});

DesertInstanceSchema.virtual("slug").get(function () {
  let slug = this.name;
  slug.replace(" ", "_");
  return slug;
});


DesertInstanceSchema.virtual("url").get(function () {
  return `/menu/${this.entree.category.slug}/desertinstance/${this.slug}`;
});

module.exports = mongoose.model("DesertInstance", DesertInstanceSchema);
