const Category = require("../models/category");
const Item = require("../models/item");
const ItemInstance = require("../models/iteminstance");

const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  const [
    categories,
    items,
    iteminstances,
    numItemsInstances,
    numAvailableItemInstance,
  ] = await Promise.all([
    Category.find({}, "name").exec(),
    Item.find({}, "name price category title").sort({ name: 1 }).exec(),
    ItemInstance.find({}, "status item").exec(),
    ItemInstance.countDocuments().exec(),
    ItemInstance.countDocuments({ status: "Available" }).exec(),
  ]);

  res.render("index", {
    title: "Local Resturant",
    categories: categories,
    items: items,
    iteminstances: iteminstances,
    item_instance_count: numItemsInstances,
    available_item_instance_count: numAvailableItemInstance,
  });
});

// Display list of all Categories.
exports.category_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Category list");
});

// Display detail page for a specific Category.
exports.category_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Category detail: ${req.params.slug}`);
});

// Display Category create form on GET.
exports.category_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Category create GET");
});

// Handle Category create on POST.
exports.category_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Category create POST");
});

// Display Category delete form on GET.
exports.category_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Category delete GET");
});

// Handle Category delete on POST.
exports.category_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Category delete POST");
});

// Display Category update form on GET.
exports.category_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Category update GET");
});

// Handle Category update on POST.
exports.category_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Category update POST");
});
