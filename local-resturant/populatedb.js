#! /usr/bin/env node

console.log(
  'This script populates some test entrees, sides, deserts, drinks, and instances for food items to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Category = require("./models/category");
const Item = require("./models/item");
const ItemInstance = require("./models/iteminstance");

const categories = [];
const items = [];
const itemInstances = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createCategories();
  await createItems();
  await createItemInstances();
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

async function itemCreate(index, name, price, description, category, instance) {
  const itemdetail = {
    name: name,
    price: price,
    category: category,
    instance: instance,
  };
  if (description != false) itemdetail.description = description;

  const item = new Item(itemdetail);

  await item.save();
  items[index] = item;
  console.log(`Added item: ${name}`);
}

async function itemInstanceCreate(index, item, made, status) {
  const iteminstancedetail = {
    item: item,
    made: made,
  };
  if (status != false) iteminstancedetail.status = status;

  const iteminstance = new ItemInstance(iteminstancedetail);
  await iteminstance.save();
  itemInstances[index] = iteminstance;
  console.log(`Added itemInstance: ${iteminstance.item.name}`);
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

async function createItems() {
  console.log("Adding deserts");
  await Promise.all([
    itemCreate(0, "Pie", '2.99', false, categories[2]),
    itemCreate(1, "Cookie", '0.99', false, categories[2]),
    itemCreate(
      2,
      "Lava Cake",
      4.99,
      "Chocolate cake with fudge and brownie toppings",
      categories[2]
    ),
    itemCreate(3, "Fries", '0.99', false, categories[1]),
    itemCreate(4, "Baked Potato", '2.99', false, categories[1]),
    itemCreate(5, "Coke", '1.99', "Soft Drink", categories[3], false),
    itemCreate(6, "Sprite", '1.99', "Soft Drink", categories[3], false),
    itemCreate(7, "Milkshake", '3.99', "Frozen Drink", categories[3], false),
    itemCreate(8, "Dr. Pepper", '1.99', "Soft Drink", categories[3], false),
    itemCreate(9, "Orange Juice", '0.99', "Juice", categories[3], false),
    itemCreate(
      10,
      "Cheeseburger",
      '6.99',
      "Sandwhich made with 1/4lbs beef patty, tomatoes and onions",
      categories[0]
    ),
    itemCreate(11, "Chicken Sandwhich", '4.99', false, categories[0]),
    itemCreate(12, "Sirloin", '11.99', false, categories[0]),
  ]);
}

async function createItemInstances() {
  console.log("Adding desert instances");
  await Promise.all([
    itemInstanceCreate(0, items[0], "2023-11-15T14:26:00", false),
    itemInstanceCreate(1, items[0], "2023-11-15T08:08:00", "Expired"),
    itemInstanceCreate(2, items[0], "2023-11-15T14:43:00", "Available"),
    itemInstanceCreate(3, items[1], "2023-11-15T08:02:00", "Expired"),
    itemInstanceCreate(4, items[1], "2023-11-15T14:48:00", false),
    itemInstanceCreate(5, items[2], "2023-11-15T16:26:00", "Available"),
    itemInstanceCreate(6, items[10], "2023-11-15T16:26:00", false),
    itemInstanceCreate(7, items[12], "2023-11-15T11:18:00", "Expired"),
    itemInstanceCreate(8, items[12], "2023-11-15T14:34:00", "Available"),
    itemInstanceCreate(9, items[3], "2023-11-15T08:34:00", "Expired"),
    itemInstanceCreate(10, items[4], "2023-11-15T12:54:00", false),
  ]);
}
