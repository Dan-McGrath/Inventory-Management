const Item = require("../models/item");
const Category = require("../models/category");
const ItemInstances = require("../models/iteminstance");

const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

// Display list of all Items.
exports.item_list = asyncHandler(async (req, res, next) => {
  const items = await Item.find().populate("category").exec();

  res.render("items_list", {
    title: `Items List`,
    items_list: items,
  });
});

// Display detail page for a specific Item.
exports.item_detail = asyncHandler(async (req, res, next) => {
  const item = await Item.findById(req.params.id).populate("category").exec();
  const itemInstances = await ItemInstances.find({
    item: req.params.id,
  })
    .populate("item")
    .exec();
  res.render("item_detail", {
    title: item.name,
    item_info: item,
    item_instances: itemInstances,
  });
});

// Display Item create form on GET.
exports.item_create_get = asyncHandler(async (req, res, next) => {
  const allCategories = await Category.find().exec();
  res.render("item_form", { title: "Create Item", categories: allCategories });
});

// Handle Item create on POST.
exports.item_create_post = [
  (req, res, next) => {
    if (!(req.body.category instanceof Array)) {
      if (typeof req.body.category === "undefiend") req.body.category = [];
      else req.body.category = new Array(req.body.category);
    }
    next();
  },

  body("name", "Name must not be empty").trim().isLength({ min: 1 }).escape(),
  body("price", "Price must not be empty").trim().isLength({ min: 1 }).escape(),
  body("description").trim().isLength({ max: 250 }).escape(),
  body("category", "Category must be selected")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("instance", "Choose if instances are allowed")
    .trim()
    .isLength({ min: 1 })
    .escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const item = new Item({
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
      instance: req.body.instance,
    });

    if (!errors.isEmpty()) {
      const allCategories = await Category.find().exec();

      res.render("item_form", {
        title: "Create Item",
        categories: allCategories,
        item: item,
        errors: errors.array(),
      });
    } else {
      await item.save();
      res.redirect(item.url);
    }
  }),
];

// Display Item delete form on GET.
exports.item_delete_get = asyncHandler(async (req, res, next) => {
  const [item, allItemInstances] = await Promise.all([
    Item.findById(req.params.id).exec(),
    ItemInstances.find({ item: req.params.id }).exec(),
  ]);

  if (item === null) {
    res.redirect("/menu/items");
  }
  res.render("item_delete", {
    title: "Delete Item",
    item: item,
    instances: allItemInstances,
  });
});

// Handle Item delete on POST.
exports.item_delete_post = asyncHandler(async (req, res, next) => {
  const [item, allItemInstances] = await Promise.all([
    Item.findById(req.params.id).exec(),
    ItemInstances.find({ item: req.params.id }).exec(),
  ]);

  

  if (allItemInstances.length > 0) {
    res.render("item_delete", {
      title: "Delete Item",
      item: item,
      instances: allItemInstances,
    });
    return;
  } else {
    await Item.findByIdAndDelete(req.body.itemid);
    res.redirect("/menu/items");
  }
});

// Display Item update form on GET.
exports.item_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Item update GET");
});

// Handle Item update on POST.
exports.item_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Item update POST");
});
