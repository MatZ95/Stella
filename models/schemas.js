//  Tworzenie schematów list do bazy danych

var mongoose = require("mongoose");
var schema = mongoose.Schema;

let starsSchema = new schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  constellation: { type: String, require: true }
});

let constellationsSchema = new schema({
  name: { type: String, require: true },
  description: { type: String, require: true }
});

let usersSchema = new schema({
  login: { type: String, require: true },
  password: { type: String, require: true },
});

let stars = mongoose.model("stars", starsSchema, "stars");
let constellations = mongoose.model("constellations", constellationsSchema, "constellations");
let users = mongoose.model("users", usersSchema, "users");

module.exports = {
  starsSchema,
  constellationsSchema,
  usersSchema,
  stars,
  constellations,
  users
};
