const EntreeInstance = require("../models/entreeInstance");
const asyncHandler = require("express-async-handler");

// Display list of all EntreeInstances.
exports.entreeinstance_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: EntreeInstance list");
});

// Display detail page for a specific EntreeInstance.
exports.entreeinstance_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: EntreeInstance detail: ${req.params.id}`);
});

// Display EntreeInstance create form on GET.
exports.entreeinstance_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: EntreeInstance create GET");
});

// Handle EntreeInstance create on POST.
exports.entreeinstance_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: EntreeInstance create POST");
});

// Display EntreeInstance delete form on GET.
exports.entreeinstance_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: EntreeInstance delete GET");
});

// Handle EntreeInstance delete on POST.
exports.entreeinstance_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: EntreeInstance delete POST");
});

// Display EntreeInstance update form on GET.
exports.entreeinstance_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: EntreeInstance update GET");
});

// Handle EntreeInstance update on POST.
exports.entreeinstance_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: EntreeInstance update POST");
});
