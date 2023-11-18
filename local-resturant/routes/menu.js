const express = require("express");
const router = express.Router();

const category_controller = require("../contollers/categoryController");
const item_controller = require("../contollers/itemController");
const item_instance_controller = require("../contollers/iteminstanceController");

/// CATEGORY ROUTES ///

router.get("/", category_controller.index);

router.get("/category/create", category_controller.category_create_get);
router.post("/category/create", category_controller.category_create_post);

router.get("/category/:slug/delete", category_controller.category_delete_get);
router.post("/category/:slug/delete", category_controller.category_delete_post);

router.get("/category/:slug/update", category_controller.category_update_get);
router.post("/category/:slug/update", category_controller.category_update_post);

router.get("/category/:slug", category_controller.category_detail);

router.get("/categories", category_controller.category_list);

/// ITEM ROUTES ///

router.get("/:categorySlug/create", item_controller.item_create_get);
router.post("/:categorySlug/create", item_controller.item_create_post);

router.get("/:categorySlug/:slug/delete", item_controller.item_delete_get);
router.post("/:categorySlug/:slug/delete", item_controller.item_delete_post);

router.get("/:categorySlug/:slug/update", item_controller.item_update_get);
router.post("/:categorySlug/:slug/update", item_controller.item_update_post);

router.get("/:categorySlug/:slug", item_controller.item_detail);

router.get("/:slug", item_controller.item_list);

/// DESERT INSTANCE ROUTE ///

router.get(
  "/:categorySlug/:slug/create",
  item_instance_controller.iteminstance_create_get
);
router.post(
  "/:categorySlug/:slug/create",
  item_instance_controller.iteminstance_create_post
);

router.get(
  "/:categorySlug/:slug/:id/delete",
  item_instance_controller.iteminstance_delete_get
);
router.post(
  "/:categorySlug/:slug/:id/delete",
  item_instance_controller.iteminstance_delete_post
);

router.get(
  "/:categorySlug/:slug/:id/update",
  item_instance_controller.iteminstance_update_get
);
router.post(
  "/:categorySlug/:slug/:id/update",
  item_instance_controller.iteminstance_update_post
);

router.get(
  "/:categorySlug/:slug/:id",
  item_instance_controller.iteminstance_detail
);

router.get(
  "/:categorySlug/desertinstances",
  item_instance_controller.iteminstance_list
);

// /// DRINK ROUTES ///

// router.get("/:categorySlug/create", item_controller.item_create_get);
// router.post("/:categorySlug/create", item_controller.item_create_post);

// router.get("/:categorySlug/:slug/delete", item_controller.item_delete_get);
// router.post("/:categorySlug/:slug/delete", item_controller.item_delete_post);

// router.get("/:categorySlug/:slug/update", item_controller.item_update_get);
// router.post("/:categorySlug/:slug/update", item_controller.item_update_post);

// router.get("/:categorySlug/:slug", item_controller.item_detail);

// router.get("/drinks", item_controller.item_list);

// /// ENTREE ROUTES ///

// router.get("/:categorySlug/create", item_controller.item_create_get);
// router.post("/:categorySlug/create", item_controller.item_create_post);

// router.get("/:categorySlug/:slug/delete", item_controller.item_delete_get);
// router.post("/:categorySlug/:slug/delete", item_controller.item_delete_post);

// router.get("/:categorySlug/:slug/update", item_controller.item_update_get);
// router.post("/:categorySlug/:slug/update", item_controller.item_update_post);

// router.get("/:categorySlug/:slug", item_controller.item_detail);

// router.get("/entrees", item_controller.item_list);

// /// ENTREE INSTSANCE ROUTES ///

// router.get(
//   "/:categorySlug/entreeinstance/create",
//   item_instance_controller.iteminstance_create_get
// );
// router.post(
//   "/:categorySlug/entreeinstance/create",
//   item_instance_controller.iteminstance_create_post
// );

// router.get(
//   "/:categorySlug/entreeinstance/:id/delete",
//   item_controller.item_delete_get
// );
// router.post(
//   "/:categorySlug/entreeinstance/:id/delete",
//   item_instance_controller.iteminstance_delete_post
// );

// router.get(
//   "/:categorySlug/entreeinstance/:id/update",
//   item_instance_controller.iteminstance_update_get
// );
// router.post(
//   "/:categorySlug/entreeinstance/:id/update",
//   item_instance_controller.iteminstance_update_post
// );

// router.get(
//   "/:categorySlug/entreeinstance/:slug",
//   item_instance_controller.iteminstance_detail
// );

// router.get(
//   "/:categorySlug/entreeinstances",
//   item_instance_controller.iteminstance_list
// );

// /// SIDE ROUTES ///

// router.get("/:categorySlug/create", item_controller.item_create_get);
// router.post("/:categorySlug/create", item_controller.item_create_post);

// router.get("/:categorySlug/:slug/delete", item_controller.item_delete_get);
// router.post("/:categorySlug/:slug/delete", item_controller.item_delete_post);

// router.get("/:categorySlug/:slug/update", item_controller.item_update_get);
// router.post("/:categorySlug/:slug", item_controller.item_update_post);

// router.get("/:categorySlug/:slug", item_controller.item_detail);

// router.get("/:slug", item_controller.item_list);

// /// SIDE INSTANCE ROUTES ///

// router.get(
//   "/:categorySlug/sideinstance/create",
//   item_instance_controller.iteminstance_create_get
// );
// router.post(
//   "/:categorySlug/sideinstance/create",
//   item_instance_controller.iteminstance_create_post
// );

// router.get(
//   "/:categorySlug/sideinstance/:id/delete",
//   item_instance_controller.iteminstance_delete_get
// );
// router.post(
//   "/:categorySlug/sideinstance/:id/delete",
//   item_instance_controller.iteminstance_delete_post
// );

// router.get(
//   "/:categorySlug/sideinstance/:id/update",
//   item_instance_controller.iteminstance_update_get
// );
// router.post(
//   "/:categorySlug/sideinstance/:id/update",
//   item_instance_controller.iteminstance_update_post
// );

// router.get(
//   "/:categorySlug/sideinstance/:id",
//   item_instance_controller.iteminstance_detail
// );

// router.get(
//   "/:categorySlug/sideinstances",
//   item_instance_controller.iteminstance_list
// );

module.exports = router;
