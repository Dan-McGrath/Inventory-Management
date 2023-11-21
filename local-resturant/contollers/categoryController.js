const Category = require("../models/category");
const Item = require("../models/item");
const ItemInstance = require("../models/iteminstance");

const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
  const [
    categories,
    items,
    iteminstances,
    numItemsInstances,
    numAvailableItemInstance,
  ] = await Promise.all([
    Category.find({}, "name").exec(),
    Item.find({}, "name price category title instance")
      .sort({ name: 1 })
      .exec(),
    ItemInstance.find({}, "status item").exec(),
    ItemInstance.countDocuments().exec(),
    ItemInstance.countDocuments({ status: "Available" }).exec(),
  ]);

  res.render("index", {
    title: "Local Resturant",
    categories: categories,
    items: items,
    iteminstances: iteminstances,
    item_instance_count: numItemsInstances,
    available_item_instance_count: numAvailableItemInstance,
  });
});

// Display list of all Categories.
exports.category_list = asyncHandler(async (req, res, next) => {
  const category = await Category.find().exec();
  res.render("category_list", {
    title: "Category List",
    categories: category,
  });
});

// Display detail page for a specific Category.
exports.category_detail = asyncHandler(async (req, res, next) => {
  const [category, itemsinCatagory] = await Promise.all([
    Category.findById(req.params.id).exec(),
    Item.find({ category: req.params.id }).sort({ name: 1 }).exec(),
  ]);

  res.render("category_detail", {
    title: `${category.title}`,
    items: itemsinCatagory,
    category: category,
  });
});

// Display Category create form on GET.
exports.category_create_get = asyncHandler(async (req, res, next) => {
  res.render("category_form", {
    title: "Create Category",
  });
});

// Handle Category create on POST.
exports.category_create_post = [
  body("name", "Category name must contain at least 3 characters")
    .trim()
    .isLength({ min: 3 })
    .escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const category = new Category({ name: req.body.name });

    if (!errors.isEmpty()) {
      res.render("category_form", {
        title: "Category Create",
        category: category,
        errors: errors.array(),
      });
      return;
    } else {
      const categoryExists = await Category.findOne({
        name: req.body.name,
      })
        .collation({ locale: "en", strength: 2 })
        .exec();
      if (categoryExists) {
        res.redirect(categoryExists.url);
      } else {
        await category.save();
        res.redirect(category.url);
      }
    }
  }),
];

// Display Category delete form on GET.
exports.category_delete_get = asyncHandler(async (req, res, next) => {
  const [category, allItemsInCategory] = await Promise.all([
    Category.findById(req.params.id).exec(),
    Item.find({ category: req.params.id }, "name description").exec(),
  ]);

  if (category === null) {
    res.redirect("/menu/categories");
  }
  console.log(allItemsInCategory)

  res.render("category_delete", {
    title: "Delete Category",
    category: category,
    category_items: allItemsInCategory,
  });
});

// Handle Category delete on POST.
exports.category_delete_post = asyncHandler(async (req, res, next) => {
  const [category, allItemsInCategory] = await Promise.all([
    Category.findById(req.params.id).exec(),
    Item.find({ category: req.params.id }, "name description").exec(),
  ]);

  if (allItemsInCategory.length > 0) {
    res.render("category_delete", {
      title: "Category Delete",
      category: category,
      category_items: allItemsInCategory,
    });
    return;
  } else {
    await Category.findByIdAndDelete(req.body.categoryid);
    res.redirect("/menu/categories");
  }
});

// Display Category update form on GET.
exports.category_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Category update GET");
});

// Handle Category update on POST.
exports.category_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Category update POST");
});
