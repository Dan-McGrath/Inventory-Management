const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SideInstanceSchema = new Schema({
  side: { type: Schema.Types.ObjectId, ref: "Side", required: true },
  made: { type: Date, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Expired"],
    default: "Available",
  },
});

SideInstanceSchema.virtual("slug").get(function () {
  let slug = this.name;
  slug.replace(" ", "_");
  return slug;
});


SideInstanceSchema.virtual("url").get(function () {
  return `/menu/${this.side.category.slug}/sideinstance/${this._id}`;
});

module.exports = mongoose.model("SideInstance", SideInstanceSchema);
