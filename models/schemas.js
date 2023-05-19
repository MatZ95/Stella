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
constellationsSchema.pre('save', async function (next) {
  try {
    const starsCount = await this.model('stars').countDocuments({ _id: { $in: this.stars } });
    this.numberOfStars = starsCount;
    next();
  } catch (error) {
    next(error);
  }
});

// Middleware to update numberOfStars before findOneAndUpdate
constellationsSchema.pre('findOneAndUpdate', async function () {
  try {
    const updatedData = this.getUpdate();
    const starsCount = await this.model('stars').countDocuments({ _id: { $in: updatedData.stars } });
    this.set('numberOfStars', starsCount);
  } catch (error) {
    throw error;
  }
});






let stars = mongoose.model("stars", starsSchema, "stars");
let constellations = mongoose.model("constellations", constellationsSchema, "constellations");

module.exports = {
  starsSchema,
  constellationsSchema,
  stars,
  constellations
};
