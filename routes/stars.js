var express = require("express");
var router = express.Router();
var bodyParser = require("body-parser");
var schemas = require("../models/schemas.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/new", async (req, res) => {
  let starsName = req.body.starsName;
  let starsType = req.body.starsType;
  let stars = schemas.stars;

  let qry = { name: starsName };

  let searchResult = await stars.findOne(qry).then(async (userData) => {
    if (!userData) {
      // Można dodać gwiazdę
      let newStars = new schemas.stars({
        name: starsName,
        type: starsType,
      });

      let saveStars = await newStars.save();
    }
  });

  res.redirect("/");
});

module.exports = router;
