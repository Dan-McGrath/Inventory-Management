const DesertInstance = require("../models/desertinstance");
const asyncHandler = require("express-async-handler");

// Display list of all DesertInstances.
exports.desertinstance_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: DesertInstance list");
});

// Display detail page for a specific DesertInstance.
exports.desertinstance_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: DesertInstance detail: ${req.params.id}`);
});

// Display DesertInstance create form on GET.
exports.desertinstance_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: DesertInstance create GET");
});

// Handle DesertInstance create on POST.
exports.desertinstance_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: DesertInstance create POST");
});

// Display DesertInstance delete form on GET.
exports.desertinstance_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: DesertInstance delete GET");
});

// Handle DesertInstance delete on POST.
exports.desertinstance_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: DesertInstance delete POST");
});

// Display DesertInstance update form on GET.
exports.desertinstance_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: DesertInstance update GET");
});

// Handle desertinstance update on POST.
exports.desertinstance_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: DesertInstance update POST");
});
