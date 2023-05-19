var express = require("express");
var router = express.Router();
var schemas = require("../models/schemas.js");

router.get("/", async (req, res) => {
  let stars = schemas.stars;
  let constellations = schemas.constellations;

  try {
    const starsData = await stars.find({});
    const constellationsData = await constellations.find({});

    res.render("index", { title: "Stella", stars: starsData, constellations: constellationsData });
  } catch (err) {
    console.error(err);
    res.render("index", { title: "Stella", stars: [], constellations: [] });
  }
});

module.exports = router;
