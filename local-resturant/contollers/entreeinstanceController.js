const EntreeInstance = require("../models/entreeInstance");
const asyncHandler = require("express-async-handler");

// Display list of all DrinkInstances.
exports.drinkinstance_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: DrinkInstance list");
});

// Display detail page for a specific DrinkInstance.
exports.drinkinstance_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: DrinkInstance detail: ${req.params.id}`);
});

// Display DrinkInstance create form on GET.
exports.drinkinstance_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: DrinkInstance create GET");
});

// Handle DrinkInstance create on POST.
exports.drinkinstance_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: DrinkInstance create POST");
});

// Display DrinkInstance delete form on GET.
exports.drinkinstance_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: DrinkInstance delete GET");
});

// Handle DrinkInstance delete on POST.
exports.drinkinstance_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: DrinkInstance delete POST");
});

// Display DrinkInstance update form on GET.
exports.drinkinstance_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: DrinkInstance update GET");
});

// Handle DrinkInstance update on POST.
exports.drinkinstance_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: DrinkInstance update POST");
});
