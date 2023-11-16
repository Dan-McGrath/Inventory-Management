const Drink = require("../models/drink");
const asyncHandler = require("express-async-handler");

// Display list of all Drinks.
exports.drink_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Drink list");
});

// Display detail page for a specific Drink.
exports.drink_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: Drink detail: ${req.params.id}`);
});

// Display Drink create form on GET.
exports.drink_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Drink create GET");
});

// Handle Drink create on POST.
exports.drink_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Drink create POST");
});

// Display Drink delete form on GET.
exports.drink_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Drink delete GET");
});

// Handle Drink delete on POST.
exports.drink_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Drink delete POST");
});

// Display Drink update form on GET.
exports.drink_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Drink update GET");
});

// Handle Drink update on POST.
exports.drink_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Drink update POST");
});
