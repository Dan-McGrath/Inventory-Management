#! /usr/bin/env node

console.log(
  'This script populates some test entrees, sides, deserts, drinks, and instances for food items to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Category = require("./models/category");
const Desert = require("./models/desert");
const DesertInstance = require("./models/desertinstance");
const Drink = require("./models/drink");
const Entree = require("./models/entree");
const EntreeInstance = require("./models/entreeInstance");
const Side = require("./models/side");
const SideInstance = require("./models/sideinstance");

const categories = [];
const deserts = [];
const desertInstances = [];
const drinks = [];
const entrees = [];
const entreeInstances = [];
const sides = [];
const sideInstances = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createCategories();
  await createDeserts();
  await createDesertInstances();
  await createDrinks();
  await createEntrees();
  await createEntreeInstances();
  await createSides();
  await createSideInstances();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

// We pass the index to the ...Create functions so that, for example,
// category[0] will always be the Entree genre, regardless of the order
// in which the elements of promise.all's argument complete.
async function categoryCreate(index, name) {
  const category = new Category({ name: name });
  await category.save();
  categories[index] = category;
  console.log(`Added Category: ${category.name}`);
}

async function desertCreate(index, name, price, description, category) {
  const desertdetail = {
    name: name,
    price: price,
    category: category,
  };
  if (description != false) desertdetail.description = description;

  const desert = new Desert(desertdetail);

  await desert.save();
  deserts[index] = desert;
  console.log(`Added desert: ${name}`);
}

async function desertInstanceCreate(index, desert, made, status) {
  const desertinstancedetail = {
    desert: desert,
    made: made,
  };
  if (status != false) desertinstancedetail.status = status;

  const desertinstance = new DesertInstance(desertinstancedetail);
  await desertinstance.save();
  desertInstances[index] = desertinstance;
  console.log(`Added desertinstance: ${desertinstance.desert.name}`);
}

async function drinkCreate(index, name, price, description, category) {
  const drinkdetail = {
    name: name,
    price: price,
    category: category,
  };
  if (description != false) drinkdetail.description = description;

  const drink = new Drink(drinkdetail);
  await drink.save();
  drinks[index] = drink;
  console.log(`Added drink: ${drink.name}`);
}

async function entreeCreate(index, name, price, description, category) {
  const entreedetail = {
    name: name,
    price: price,
    category: category,
  };
  if (description != false) entreedetail.description = description;

  const entree = new Entree(entreedetail);
  await entree.save();
  entrees[index] = entree;
  console.log(`Added Entree: ${entree.name}`);
}

async function entreeInstanceCreate(index, entree, made, status) {
  const entreeinstancedetail = {
    entree: entree,
    made: made,
  };
  if (status != false) entreeinstancedetail.status = status;

  const entreedetail = new EntreeInstance(entreeinstancedetail);
  await entreedetail.save();
  entreeInstances[index] = entreedetail;
  console.log(`Added entree instance: ${entreedetail.entree.name}`);
}

async function sideCreate(index, name, price, description, category) {
  const sidedetail = {
    name: name,
    price: price,
    category: category,
  };
  if (description != false) sidedetail.description = description;

  const side = new Side(sidedetail);
  await side.save();
  sides[index] = side;
  console.log(`Added side: ${side.name}`);
}

async function sideinstanceCreate(index, side, made, status) {
  const sideinstancedetail = {
    side: side,
    made: made,
  };
  if (status != false) sideinstancedetail.status = status;

  const sideinstance = new SideInstance(sideinstancedetail);
  await sideinstance.save();
  sideInstances[index] = sideinstance;
  console.log(`Added side instance: ${sideinstance.side.name}`);
}

async function createCategories() {
  console.log("Adding categories");
  await Promise.all([
    categoryCreate(0, "Entree"),
    categoryCreate(1, "Sides"),
    categoryCreate(2, "Deserts"),
    categoryCreate(3, "Drinks"),
  ]);
}

async function createDeserts() {
  console.log("Adding deserts");
  await Promise.all([
    desertCreate(0, "Pie", 2.99, false, categories[2]),
    desertCreate(1, "Cookie", 0.99, false, categories[2]),
    desertCreate(
      2,
      "Lava Cake",
      4.99,
      "Chocolate cake with fudge and brownie toppings",
      categories[2]
    ),
  ]);
}

async function createDesertInstances() {
  console.log("Adding desert instances");
  await Promise.all([
    desertInstanceCreate(0, deserts[0], "2023-11-15T14:26:00", false),
    desertInstanceCreate(1, deserts[0], "2023-11-15T08:08:00", "Expired"),
    desertInstanceCreate(2, deserts[0], "2023-11-15T14:43:00", "Available"),
    desertInstanceCreate(3, deserts[1], "2023-11-15T08:02:00", "Expired"),
    desertInstanceCreate(4, deserts[1], "2023-11-15T14:48:00", false),
    desertInstanceCreate(5, deserts[2], "2023-11-15T16:26:00", "Available"),
  ]);
}

async function createDrinks() {
  console.log("Adding drinks");
  await Promise.all([
    drinkCreate(0, "Coke", 1.99, "Soft Drink", categories[3]),
    drinkCreate(1, "Sprite", 1.99, "Soft Drink", categories[3]),
    drinkCreate(2, "Milkshake", 3.99, "Frozen Drink", categories[3]),
    drinkCreate(3, "Dr. Pepper", 1.99, "Soft Drink", categories[3]),
    drinkCreate(4, "Orange Juice", 0.99, "Juice", categories[3]),
  ]);
}

async function createEntrees() {
  console.log("Adding entrees");
  await Promise.all([
    entreeCreate(
      0,
      "Cheeseburger",
      6.99,
      "Sandwhich made with 1/4lbs beef patty, tomatoes and onions",
      categories[0]
    ),
    entreeCreate(1, "Chicken Sandwhich", 4.99, false, categories[0]),
    entreeCreate(2, "Sirloin", 11.99, false, categories[0]),
  ]);
}

async function createEntreeInstances() {
  console.log("Adding entree instances");
  await Promise.all([
    entreeInstanceCreate(0, entrees[0], "2023-11-15T16:26:00", false),
    entreeInstanceCreate(1, entrees[2], "2023-11-15T11:18:00", "Expired"),
    entreeInstanceCreate(2, entrees[2], "2023-11-15T14:34:00", "Available"),
  ]);
}

async function createSides() {
  console.log("Adding sides");
  await Promise.all([
    sideCreate(0, "Fries", 0.99, false, categories[1]),
    sideCreate(1, "Baked Potato", 2.99, false, categories[1]),
  ]);
}

async function createSideInstances() {
  console.log("Adding side instances");
  await Promise.all([
    sideinstanceCreate(0, sides[0], "2023-11-15T08:34:00", "Expired"),
    sideinstanceCreate(0, sides[1], "2023-11-15T12:54:00", false),
  ]);
}