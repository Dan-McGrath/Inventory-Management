const ItemInstance = require("../models/iteminstance");
const Item = require("../models/item");

const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

// Display list of all ItemInstances.
exports.iteminstance_list = asyncHandler(async (req, res, next) => {
  const iteminstance = await ItemInstance.find({}, "made status")
    .populate("item")
    .exec();

  res.render("iteminstance_list", {
    title: "List of Item Instances",
    iteminstances: iteminstance,
  });
});

// Display detail page for a specific ItemInstance.
exports.iteminstance_detail = asyncHandler(async (req, res, next) => {
  const itemInstance = await ItemInstance.findById(req.params.id)
    .populate("item")
    .exec();
  res.render("instance_detail", {
    instance: itemInstance,
  });
});

// Display ItemInstance create form on GET.
exports.iteminstance_create_get = asyncHandler(async (req, res, next) => {
  const items = await Item.find({}, "title name").exec();
  res.render("instance_create", {
    title: "Create Instance",
    item_list: items,
  });
});

// Handle ItemInstance create on POST.
exports.iteminstance_create_post = [
  (req, res, next) => {
    if (!(req.body.item instanceof Array)) {
      if (typeof req.body.item === "undefined") req.body.item = [];
      else req.body.item = new Array(req.body.item);
    }
    next();
  },

  body("item", "Select Item").trim().isLength({ min: 1 }).escape(),
  body("made", "Invalid date").isISO8601().toDate(),
  body("status").escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const itemInstance = new ItemInstance({
      item: req.body.item,
      made: req.body.made,
      status: req.body.status,
    });

    if (!errors.isEmpty()) {
      const allItems = await Item.find({}, "name").exec();

      res.render("instance_create", {
        title: "Create instance",
        item_list: allItems,
        selected_item: itemInstance.item._id,
        errors: errors.array(),
        iteminstance: itemInstance,
      });
      return;
    } else {
      await itemInstance.save();
      res.redirect(itemInstance.url);
    }
  }),
];

// Display ItemInstance delete form on GET.
exports.iteminstance_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ItemInstance delete GET");
});

// Handle ItemInstance delete on POST.
exports.iteminstance_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ItemInstance delete POST");
});

// Display ItemInstance update form on GET.
exports.iteminstance_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ItemInstance update GET");
});

// Handle Iteminstance update on POST.
exports.iteminstance_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: ItemInstance update POST");
});
