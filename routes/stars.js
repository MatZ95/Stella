const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas.js");

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

      await newStars.save();
    }
  });

  res.redirect("/");
});

router.delete('/:id', async (req, res) => {
  let stars = schemas.stars;
  let starId = req.params.id;

  try {
    await stars.deleteOne({ _id: starId });
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

module.exports = router;
