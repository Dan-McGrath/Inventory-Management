const Desert = require("../models/desert");
const asyncHandler = require("express-async-handler");

// Display list of all Deserts.
exports.desert_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Desert list");
});

// Display detail page for a specific Desert.
exports.desert_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Desert detail: ${req.params.id}`);
});

// Display Desert create form on GET.
exports.desert_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Desert create GET");
});

// Handle Desert create on POST.
exports.desert_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Desert create POST");
});

// Display Desert delete form on GET.
exports.desert_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Desert delete GET");
});

// Handle Desert delete on POST.
exports.desert_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Desert delete POST");
});

// Display Desert update form on GET.
exports.desert_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Desert update GET");
});

// Handle Desert update on POST.
exports.desert_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Desert update POST");
});
