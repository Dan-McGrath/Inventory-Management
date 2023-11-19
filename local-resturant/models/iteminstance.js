const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ItemInstanceSchema = new Schema({
  item: { type: Schema.Types.ObjectId, ref: "Item", required: true },
  made: { type: Date, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Expired", "Out of Stock"],
    default: "Available",
  },
});

ItemInstanceSchema.virtual("slug").get(function () {
  let slug = `${this.item.name}instance`;
  slug.replace(" ", "_");
  return slug;
});

ItemInstanceSchema.virtual("url").get(function () {
  return `/menu/${this.item.category._id}/${this.item._id}instance/${this._id}`;
});

module.exports = mongoose.model("ItemInstance", ItemInstanceSchema);
