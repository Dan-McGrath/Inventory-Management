const ItemInstance = require("../models/iteminstance");

const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

// Display list of all ItemInstances.
exports.iteminstance_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ItemInstance list");
});

// Display detail page for a specific ItemInstance.
exports.iteminstance_detail = asyncHandler(async (req, res, next) => {
  const itemInstance = await ItemInstance.findById(req.params.id)
    .populate("item")
    .exec();
  console.log(itemInstance);
  res.render("instance_detail", {
    instance: itemInstance,
  });
});

// Display ItemInstance create form on GET.
exports.iteminstance_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ItemInstance create GET");
});

// Handle ItemInstance create on POST.
exports.iteminstance_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ItemInstance create POST");
});

// Display ItemInstance delete form on GET.
exports.iteminstance_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ItemInstance delete GET");
});

// Handle ItemInstance delete on POST.
exports.iteminstance_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ItemInstance delete POST");
});

// Display ItemInstance update form on GET.
exports.iteminstance_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ItemInstance update GET");
});

// Handle Iteminstance update on POST.
exports.iteminstance_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ItemInstance update POST");
});
