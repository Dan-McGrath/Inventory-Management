const Side = require("../models/side");
const asyncHandler = require("express-async-handler");

// Display list of all Sides.
exports.side_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Side list");
});

// Display detail page for a specific Side.
exports.side_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Side detail: ${req.params.id}`);
});

// Display Side create form on GET.
exports.side_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Side create GET");
});

// Handle Side create on POST.
exports.side_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Side create POST");
});

// Display Side delete form on GET.
exports.side_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Side delete GET");
});

// Handle Side delete on POST.
exports.side_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Side delete POST");
});

// Display Side update form on GET.
exports.side_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Side update GET");
});

// Handle Side update on POST.
exports.side_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Side update POST");
});
