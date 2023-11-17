const Category = require("../models/category");
const Desert = require("../models/desert");
const Drink = require("../models/drink");
const Entree = require("../models/entree");
const Side = require("../models/side");
const DesertInstance = require("../models/desertinstance");
const EntreeInstance = require("../models/entreeInstance");
const SideInstance = require("../models/sideinstance");

const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  const [
    categories,
    deserts,
    drinks,
    entrees,
    sides,
    numDesertInstances,
    numSideInstances,
    numEntreeInstances,
    numAvailableDesertInstance,
    numAvailableEntreeInstance,
    numAvailableSideInstance,
  ] = await Promise.all([
    Category.find({}, "name").exec(),
    Desert.find({}, "name price category").sort({ name: 1 }).exec(),
    Drink.find({}, "name price category").sort({ name: 1 }).exec(),
    Entree.find({}, "name price category").sort({ name: 1 }).exec(),
    Side.find({}, "name price category").sort({ name: 1 }).exec(),
    DesertInstance.countDocuments().exec(),
    SideInstance.countDocuments({}).exec(),
    EntreeInstance.countDocuments({}).exec(),
    DesertInstance.countDocuments({ status: "Available" }).exec(),
    EntreeInstance.countDocuments({ status: "Available" }).exec(),
    SideInstance.countDocuments({ status: "Available" }).exec(),
  ]);

  res.render("index", {
    title: "Local Resturant",
    categories: categories,
    deserts: deserts,
    drinks: drinks,
    entrees: entrees,
    sides: sides,
    desert_instance_count: numDesertInstances,
    side_instance_count: numSideInstances,
    entree_instance_count: numEntreeInstances,
    available_desert_instance_count: numAvailableDesertInstance,
    available_entree_instance_count: numAvailableEntreeInstance,
    available_side_instance_count: numAvailableSideInstance,
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
