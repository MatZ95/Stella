//  Tworzenie schematów list do bazy danych

var mongoose = require("mongoose");
var schema = mongoose.Schema;

let starsSchema = new schema({
  name: { type: String, require: true },
  description: { type: String, require: true },
  constellation: { type: String, require: true }
});

let constellationsSchema = new schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  stars: [{ type: schema.Types.ObjectId, ref: 'stars' }],
  numberOfStars: { type: Number, default: 0 },
});


// Middleware to update numberOfStars before saving
constellationsSchema.pre('save', function (next) {
  this.numberOfStars = this.stars.length;
  next();
});

// Middleware to update numberOfStars before findOneAndUpdate
constellationsSchema.pre('findOneAndUpdate', function () {
  const updatedData = this.getUpdate();
  const stars = updatedData.stars || [];
  this.set('numberOfStars', stars.length);
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
