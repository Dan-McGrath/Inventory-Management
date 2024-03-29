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
  res.render("instance_form", {
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

      res.render("instance_form", {
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
  const instance = await ItemInstance.findById(req.params.id)
    .populate("item")
    .exec();

  if (instance === null) {
    res.redirect("/menu/instances");
  }

  res.render("instance_delete", {
    title: "Instance Delete",
    instance: instance,
  });
});

// Handle ItemInstance delete on POST.
exports.iteminstance_delete_post = asyncHandler(async (req, res, next) => {
  await ItemInstance.findByIdAndDelete(req.body.instanceid);
  res.redirect("/menu/iteminstances");
});

// Display ItemInstance update form on GET.
exports.iteminstance_update_get = asyncHandler(async (req, res, next) => {
  const [instance, allItems] = await Promise.all([
    ItemInstance.findById(req.params.id).populate("item").exec(),
    Item.find().exec(),
  ]);

  if (instance === null) {
    const err = new Error("Instance not found");
    err.status = 404;
    return next(err);
  }

  for (const item of allItems) {
    if (item._id.toString() === instance.item._id.toString()) {
      item.isSelected = "true";
    }
  }
  res.render("instance_form", {
    title: "Update Item",
    item_list: allItems,
    iteminstance: instance,
  });
});

// Handle Iteminstance update on POST.
exports.iteminstance_update_post = [
  (req, res, next) => {
    if (!(req.body.item instanceof Array)) {
      if (typeof req.body.item === undefined) {
        req.body.item = [];
      } else {
        req.body.item = new Array(req.body.item);
      }
    }
    next();
  },
  body("item", "Select Item").trim().isLength({ min: 1 }).escape(),
  body("made", "Invalid date").isISO8601().toDate(),
  body("status").escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const instance = new ItemInstance({
      item: req.body.item,
      made: req.body.made,
      status: req.body.status,
      _id: req.params.id,
    });

    if (!errors.isEmpty()) {
      const allItems = await Item.find().exec();

      res.render("instance_form", {
        title: "Update Instance",
        item_list: allItems,
        iteminstance: instance,
        errors: errors.array(),
      });
      return;
    } else {
      const updateInstance = await ItemInstance.findByIdAndUpdate(
        req.params.id,
        instance,
        {}
      );
      res.redirect(updateInstance.url);
    }
  }),
];
