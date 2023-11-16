const express = require("express");
const router = express.Router();

const category_controller = require("../contollers/categoryController");
const desert_controller = require("../contollers/desertController");
const desert_instance_controller = require("../contollers/desertinstanceController");
const drink_controller = require("../contollers/drinkController");
const entree_controller = require("../contollers/entreeController");
const entree_instance_controller = require("../contollers/entreeinstanceController");
const side_controller = require("../contollers/sideController");
const side_instance_controller = require("../contollers/sideinstanceController");
const e = require("express");

/// CATEGORY ROUTES ///

router.get("/", category_controller.index);

router.get("/category/create", category_controller.category_create_get);
router.post("/category/create", category_controller.category_create_post);

router.get("/category/:slug/delete", category_controller.category_delete_get);
router.post("/category/:id/delete", category_controller.category_delete_post);

router.get("/category/:slug/update", category_controller.category_update_get);
router.post("/category/:slug/update", category_controller.category_update_post);

router.get("/category/:slug", category_controller.category_detail);

router.get("/categories", category_controller.category_list);

/// DESERT ROUTES ///

router.get(
  "/:categorySlug/desert/create",
  desert_controller.desert_create_get
);
router.post(
  "/:categorySlug/desert/create",
  desert_controller.desert_create_post
);

router.get(
  "/:categorySlug/desert/:slug/delete",
  desert_controller.desert_delete_get
);
router.post(
  "/:categorySlug/desert/:slug/delete",
  desert_controller.desert_delete_post
);

router.get(
  "/:categorySlug/desert/:slug/update",
  desert_controller.desert_update_get
);
router.post(
  "/:categorySlug/desert/:slug/update",
  desert_controller.desert_update_post
);

router.get("/:categorySlug/desert/:slug", desert_controller.desert_detail);

router.get("/:categorySlug/deserts", desert_controller.desert_list);

/// DESERT INSTANCE ROUTE ///

router.get(
  "/:categorySlug/desertinstance/create",
  desert_instance_controller.desertinstance_create_get
);
router.post(
  "/:categorySlug/desertinstance/create",
  desert_instance_controller.desertinstance_create_post
);

router.get(
  "/:categorySlug/desertinstance/:slug/delete",
  desert_instance_controller.desertinstance_delete_get
);
router.post(
  "/:categorySlug/desertinstance/:slug/delete",
  desert_instance_controller.desertinstance_delete_post
);

router.get(
  "/:categorySlug/desertinstance/:slug/update",
  desert_instance_controller.desertinstance_update_get
);
router.post(
  "/:categorySlug/desertinstance/:slug/update",
  desert_instance_controller.desertinstance_update_post
);

router.get(
  "/:categorySlug/desertinstance/:slug",
  desert_instance_controller.desertinstance_detail
);

router.get(
  "/:categorySlug/desertinstances",
  desert_instance_controller.desertinstance_list
);

/// DRINK ROUTES ///

router.get("/:categorySlug/drink/create", drink_controller.drink_create_get);
router.post("/:categorySlug/drink/create", drink_controller.drink_create_post);

router.get(
  "/:categorySlug/drink/:slug/delete",
  drink_controller.drink_delete_get
);
router.post(
  "/:categorySlug/drink/:slug/delete",
  drink_controller.drink_delete_post
);

router.get(
  "/:categorySlug/drink/:slug/update",
  drink_controller.drink_update_get
);
router.post(
  "/:categorySlug/drink/:slug/update",
  drink_controller.drink_update_post
);

router.get("/:categorySlug/drink/:slug", drink_controller.drink_detail);

router.get("/:categorySlug/drinks", drink_controller.drink_list);

/// ENTREE ROUTES ///

router.get(
  "/:categorySlug/entree/create",
  entree_controller.entree_create_get
);
router.post(
  "/:categorySlug/entree/create",
  entree_controller.entree_create_post
);

router.get(
  "/:categorySlug/entree/:slug/delete",
  entree_controller.entree_delete_get
);
router.post(
  "/:categorySlug/entree/:slug/delete",
  entree_controller.entree_delete_post
);

router.get(
  "/:categorySlug/entree/:slug/update",
  entree_controller.entree_update_get
);
router.post(
  "/:categorySlug/entree/:slug/update",
  entree_controller.entree_update_post
);

router.get("/:categorySlug/entree/:slug", entree_controller.entree_detail);

router.get("/:categorySlug/entrees", entree_controller.entree_list);

/// ENTREE INSTSANCE ROUTES ///

router.get(
  "/:categorySlug/entreeinstance/create",
  entree_instance_controller.entreeinstance_create_get
);
router.post(
  "/:categorySlug/entreeinstance/create",
  entree_instance_controller.entreeinstance_create_post
);

router.get("/:categorySlug/entreeinstance/:slug/delete", entree_controller.entree_delete_get);
router.post(
  "/:categorySlug/entreeinstance/:slug/delete",
  entree_instance_controller.entreeinstance_delete_post
);

router.get(
  "/:categorySlug/entreeinstance/:slug/update",
  entree_instance_controller.entreeinstance_update_get
);
router.post(
  "/:categorySlug/entreeinstance/:slug/update",
  entree_instance_controller.entreeinstance_update_post
);

router.get(
  "/:categorySlug/entreeinstance/:slug",
  entree_instance_controller.entreeinstance_detail
);

router.get(
  "/:categorySlug/entreeinstances",
  entree_instance_controller.entreeinstance_list
);

/// SIDE ROUTES ///

router.get("/:categorySlug/side/create", side_controller.side_create_get);
router.post("/:categorySlug/side/create", side_controller.side_create_post);

router.get(
  "/:categorySlug/side/:slug/delete",
  side_controller.side_delete_get
);
router.post(
  "/:categorySlug/side/:slug/delete",
  side_controller.side_delete_post
);

router.get(
  "/:categorySlug/side/:slug/update",
  side_controller.side_update_get
);
router.post("/:categorySlug/side/:slug", side_controller.side_update_post);

router.get("/:categorySlug/side/:slug", side_controller.side_detail);

router.get("/:categorySlug/sides", side_controller.side_list);

/// SIDE INSTANCE ROUTES ///

router.get(
  "/:categorySlug/sideinstance/create",
  side_instance_controller.sideinstance_create_get
);
router.post(
  "/:categorySlug/sideinstance/create",
  side_instance_controller.sideinstance_create_post
);

router.get(
  "/:categorySlug/sideinstance/:slug/delete",
  side_instance_controller.sideinstance_delete_get
);
router.post(
  "/:categorySlug/sideinstance/:slug/delete",
  side_instance_controller.sideinstance_delete_post
);

router.get(
  "/:categorySlug/sideinstance/:slug/update",
  side_instance_controller.sideinstance_update_get
);
router.post(
  "/:categorySlug/sideinstance/:slug/update",
  side_instance_controller.sideinstance_update_post
);

router.get(
  "/:categorySlug/sideinstance/:slug",
  side_instance_controller.sideinstance_detail
);

router.get(
  "/:categorySlug/sideinstances",
  side_instance_controller.sideinstance_list
);

module.exports = router;
