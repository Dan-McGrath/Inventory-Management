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

/// DESERT ROUTES ///

router.get("/desert/create", desert_controller.desert_create_get);
router.post("/desert/create", desert_controller.desert_create_post);

router.get("/desert/:slug/delete", desert_controller.desert_delete_get);
router.post("/desert/:slug/delete", desert_controller.desert_delete_post);

router.get("/desert/:slug/update", desert_controller.desert_update_get);
router.post("/desert/:slug/update", desert_controller.desert_update_post);

router.get("/desert/:slug", desert_controller.desert_detail);

router.get("/deserts", desert_controller.desert_list);

/// DESERT INSTANCE ROUTE ///

router.get(
  "/desert/desertinstance/create",
  desert_instance_controller.desertinstance_create_get
);
router.post(
  "/desert/desertinstance/create",
  desert_instance_controller.desertinstance_create_post
);

router.get(
  "/desert/desertinstance/:id/delete",
  desert_instance_controller.desertinstance_delete_get
);
router.post(
  "/desert/desertinstance/:id/delete",
  desert_instance_controller.desertinstance_delete_post
);

router.get(
  "/desert/desertinstance/:id/update",
  desert_instance_controller.desertinstance_update_get
);
router.post(
  "/desert/desertinstance/:id/update",
  desert_instance_controller.desertinstance_update_post
);

router.get(
  "/desert/desertinstance/:id",
  desert_instance_controller.desertinstance_detail
);

router.get("/desert/desertinstances", desert_instance_controller.desertinstance_list);

/// DRINK ROUTES ///

router.get("/drink/create", drink_controller.drink_create_get);
router.post("/drink/create", drink_controller.drink_create_post);

router.get("/drink/:slug/delete", drink_controller.drink_delete_get);
router.post("/drink/:slug/delete", drink_controller.drink_delete_post);

router.get("/drink/:slug/update", drink_controller.drink_update_get);
router.post("/drink/:slug/update", drink_controller.drink_update_post);

router.get("/drink/:slug", drink_controller.drink_detail);

router.get("/drinks", drink_controller.drink_list);

/// ENTREE ROUTES ///

router.get("/entree/create", entree_controller.entree_create_get);
router.post("/entree/create", entree_controller.entree_create_post);

router.get("/entree/:slug/delete", entree_controller.entree_delete_get);
router.post("/entree/:slug/delete", entree_controller.entree_delete_post);

router.get("/entree/:slug/update", entree_controller.entree_update_get);
router.post("/entree/:slug/update", entree_controller.entree_update_post);

router.get("/entree/:slug", entree_controller.entree_detail);

router.get("/entrees", entree_controller.entree_list);

/// ENTREE INSTSANCE ROUTES ///

router.get(
  "/entree/entreeinstance/create",
  entree_instance_controller.entreeinstance_create_get
);
router.post(
  "/entree/entreeinstance/create",
  entree_instance_controller.entreeinstance_create_post
);

router.get("/entreeinstance/:id/delete", entree_controller.entree_delete_get);
router.post(
  "/entree/entreeinstance/:id/delete",
  entree_instance_controller.entreeinstance_delete_post
);

router.get(
  "/entree/entreeinstance/:id/update",
  entree_instance_controller.entreeinstance_update_get
);
router.post(
  "/entree/entreeinstance/:id/update",
  entree_instance_controller.entreeinstance_update_post
);

router.get(
  "/entree/entreeinstance/:slug",
  entree_instance_controller.entreeinstance_detail
);

router.get("/entree/entreeinstances", entree_instance_controller.entreeinstance_list);

/// SIDE ROUTES ///

router.get("/side/create", side_controller.side_create_get);
router.post("/side/create", side_controller.side_create_post);

router.get("/side/:slug/delete", side_controller.side_delete_get);
router.post("/side/:slug/delete", side_controller.side_delete_post);

router.get("/side/:slug/update", side_controller.side_update_get);
router.post("/side/:slug", side_controller.side_update_post);

router.get("/side/:slug", side_controller.side_detail);

router.get("/sides", side_controller.side_list);

/// SIDE INSTANCE ROUTES ///

router.get(
  "/side/sideinstance/create",
  side_instance_controller.sideinstance_create_get
);
router.post(
  "/side/sideinstance/create",
  side_instance_controller.sideinstance_create_post
);

router.get(
  "/side/sideinstance/:id/delete",
  side_instance_controller.sideinstance_delete_get
);
router.post(
  "/side/sideinstance/:id/delete",
  side_instance_controller.sideinstance_delete_post
);

router.get(
  "/side/sideinstance/:id/update",
  side_instance_controller.sideinstance_update_get
);
router.post(
  "/side/sideinstance/:id/update",
  side_instance_controller.sideinstance_update_post
);

router.get("/side/sideinstance/:id", side_instance_controller.sideinstance_detail);

router.get("/side/sideinstances", side_instance_controller.sideinstance_list);

module.exports = router;
