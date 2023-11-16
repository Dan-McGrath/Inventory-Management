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
  "/:category.slug/desert/create",
  desert_controller.desert_create_get
);
router.post(
  "/:category.slug/desert/create",
  desert_controller.desert_create_post
);

router.get(
  "/:category.slug/desert/:slug/delete",
  desert_controller.desert_delete_get
);
router.post(
  "/:category.slug/desert/:slug/delete",
  desert_controller.desert_delete_post
);

router.get(
  "/:category.slug/desert/:slug/update",
  desert_controller.desert_update_get
);
router.post(
  "/:category.slug/desert/:slug/update",
  desert_controller.desert_update_post
);

router.get("/:category.slug/desert/:slug", desert_controller.desert_detail);

router.get("/:category.slug/deserts", desert_controller.desert_list);

/// DESERT INSTANCE ROUTE ///

router.get(
  "/:category.slug/desertinstance/create",
  desert_instance_controller.desertinstance_create_get
);
router.post(
  "/:category.slug/desertinstance/create",
  desert_instance_controller.desertinstance_create_post
);

router.get(
  "/:category.slug/desertinstance/:slug/delete",
  desert_instance_controller.desertinstance_delete_get
);
router.post(
  "/:category.slug/desertinstance/:slug/delete",
  desert_instance_controller.desertinstance_delete_post
);

router.get(
  "/:category.slug/desertinstance/:slug/update",
  desert_instance_controller.desertinstance_update_get
);
router.post(
  "/:category.slug/desertinstance/:slug/update",
  desert_instance_controller.desertinstance_update_post
);

router.get(
  "/:category.slug/desertinstance/:slug",
  desert_instance_controller.desertinstance_detail
);

router.get(
  "/:category.slug/desertinstances",
  desert_instance_controller.desertinstance_list
);

/// DRINK ROUTES ///

router.get("/:category.slug/drink/create", drink_controller.drink_create_get);
router.post("/:category.slug/drink/create", drink_controller.drink_create_post);

router.get(
  "/:category.slug/drink/:slug/delete",
  drink_controller.drink_delete_get
);
router.post(
  "/:category.slug/drink/:slug/delete",
  drink_controller.drink_delete_post
);

router.get(
  "/:category.slug/drink/:slug/update",
  drink_controller.drink_update_get
);
router.post(
  "/:category.slug/drink/:slug/update",
  drink_controller.drink_update_post
);

router.get("/:category.slug/drink/:slug", drink_controller.drink_detail);

router.get("/:category.slug/drinks", drink_controller.drink_list);

/// ENTREE ROUTES ///

router.get(
  "/:category.slug/entree/create",
  entree_controller.entree_create_get
);
router.post(
  "/:category.slug/entree/create",
  entree_controller.entree_create_post
);

router.get(
  "/:category.slug/entree/:slug/delete",
  entree_controller.entree_delete_get
);
router.post(
  "/:category.slug/entree/:slug/delete",
  entree_controller.entree_delete_post
);

router.get(
  "/:category.slug/entree/:slug/update",
  entree_controller.entree_update_get
);
router.post(
  "/:category.slug/entree/:slug/update",
  entree_controller.entree_update_post
);

router.get("/:category.slug/entree/:slug", entree_controller.entree_detail);

router.get("/:category.slug/entrees", entree_controller.entree_list);

/// ENTREE INSTSANCE ROUTES ///

router.get(
  "/:category.slug/entreeinstance/create",
  entree_instance_controller.entreeinstance_create_get
);
router.post(
  "/:category.slug/entreeinstance/create",
  entree_instance_controller.entreeinstance_create_post
);

router.get("/:category.slug/entreeinstance/:slug/delete", entree_controller);
router.post(
  "/:category.slug/entreeinstance/:slug/delete",
  entree_instance_controller.entreeinstance_delete_post
);

router.get(
  "/:category.slug/entreeinstance/:slug/update",
  entree_instance_controller.entreeinstance_update_get
);
router.post(
  "/:category.slug/entreeinstance/:slug/update",
  entree_instance_controller.entreeinstance_update_post
);

router.get(
  "/:category.slug/entreeinstance/:slug",
  entree_instance_controller.entreeinstance_detail
);

router.get(
  "/:category.slug/entreeinstances",
  entree_instance_controller.entreeinstance_list
);

/// SIDE ROUTES ///

router.get("/:category.slug/side/create", side_controller.side_create_get);
router.post("/:category.slug/side/create", side_controller.side_create_post);

router.get(
  "/:category.slug/side/:slug/delete",
  side_controller.side_delete_get
);
router.post(
  "/:category.slug/side/:slug/delete",
  side_controller.side_delete_post
);

router.get(
  "/:category.slug/side/:slug/update",
  side_controller.side_update_get
);
router.post("/:category.slug/side/:slug", side_controller.side_update_post);

router.get("/:category.slug/side/:slug", side_controller.side_detail);

router.get("/:category.slug/sides", side_controller.side_list);

/// SIDE INSTANCE ROUTES ///

router.get(
  "/:category.slug/sideinstance/create",
  side_instance_controller.sideinstance_create_get
);
router.post(
  "/:category.slug/sideinstance/create",
  side_instance_controller.sideinstance_create_post
);

router.get(
  "/:category.slug/sideinstance/:slug/delete",
  side_instance_controller.sideinstance_delete_get
);
router.post(
  "/:category.slug/sideinstance/:slug/delete",
  side_instance_controller.sideinstance_delete_post
);

router.get(
  "/:category.slug/sideinstance/:slug/update",
  side_instance_controller.sideinstance_update_get
);
router.post(
  "/:category.slug/sideinstance/:slug/update",
  side_instance_controller.sideinstance_update_post
);

router.get(
  "/:category.slug/sideinstance/:slug",
  side_instance_controller.sideinstance_detail
);

router.get(
  "/:category.slug/sideinstances",
  side_instance_controller.sideinstance_list
);
