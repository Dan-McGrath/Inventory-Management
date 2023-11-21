const mongoose = require("mongoose");
const { DateTime } = require("luxon");

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

ItemInstanceSchema.virtual("date_time").get(function () {
  return DateTime.fromJSDate(this.made).toLocaleString(DateTime.DATETIME_SHORT);
});

ItemInstanceSchema.virtual("url").get(function () {
  return `/menu/items/${this.item}/${this._id}`;
});

module.exports = mongoose.model("ItemInstance", ItemInstanceSchema);
