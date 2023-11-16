const SideInstance = require("../models/sideinstance");
const asyncHandler = require("express-async-handler");

// Display list of all SideInstances.
exports.sideinstance_list = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: SideInstance list");
});

// Display detail page for a specific SideInstance.
exports.sideinstance_detail = asyncHandler(async (req, res, next) => {
  res.send(`NOT IMPLEMENTED: SideInstance detail: ${req.params.id}`);
});

// Display SideInstance create form on GET.
exports.sideinstance_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: SideInstance create GET");
});

// Handle SideInstance create on POST.
exports.sideinstance_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: SideInstance create POST");
});

// Display SideInstance delete form on GET.
exports.sideinstance_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: SideInstance delete GET");
});

// Handle SideInstance delete on POST.
exports.sideinstance_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: SideInstance delete POST");
});

// Display SideInstance update form on GET.
exports.sideinstance_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: SideInstance update GET");
});

// Handle SideInstance update on POST.
exports.sideinstance_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: SideInstance update POST");
});
