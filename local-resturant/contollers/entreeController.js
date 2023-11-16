const Entree = require("../models/entree");
const asyncHandler = require("express-async-handler");

// Display list of all Entrees.
exports.entree_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Entree list");
});

// Display detail page for a specific Entree.
exports.entree_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Entree detail: ${req.params.id}`);
});

// Display Entree create form on GET.
exports.entree_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Entree create GET");
});

// Handle Entree create on POST.
exports.entree_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Entree create POST");
});

// Display Entree delete form on GET.
exports.entree_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Entree delete GET");
});

// Handle Entree delete on POST.
exports.entree_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Entree delete POST");
});

// Display Entree update form on GET.
exports.entree_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Entree update GET");
});

// Handle Entree update on POST.
exports.entree_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Entree update POST");
});
