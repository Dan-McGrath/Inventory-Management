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

router.get("/category/:id/delete", category_controller.category_delete_get);
router.post("/category/:id/delete", category_controller.category_delete_post);

router.get("/category/:id/update", category_controller.category_update_get);
router.post("/category/:id/update", category_controller.category_update_post);

router.get("/category/:id", category_controller.category_detail);

router.get("/categories", category_controller.category_list);

/// DESERT ROUTES ///

router.get('/')