const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/new", async (req, res, next) => {
  try {
    const { constellationsName, constellationsDescription, constellationStars } = req.body;

    const newConstellation = new schemas.constellations({
      name: constellationsName,
      description: constellationsDescription,
      stars: constellationStars,
      numberOfStars: constellationStars.length
    });

    const savedConstellation = await newConstellation.save();

    res.redirect("/");
  } catch (err) {
    console.error(err);
    next(err);
  }
});


router.delete('/:id', async (req, res) => {
  let constellations = schemas.constellations;
  let constellationId = req.params.id;

  try {
    await constellations.deleteOne({ _id: constellationId });
    res.redirect('/');
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

router.get('/:id/edit', async (req, res, next) => {
  try {
    let constellations = schemas.constellations;
    const constellation = await constellations.findById(req.params.id);

    if (!constellation) {
      throw new Error('Constellation not found');
    }

    console.log()

    res.render('edit', { title: 'Edit Constellation', constellation: constellation });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post("/:id/edit", async (req, res, next) => {
  const constellationId = req.params.id;
  const { constellationsName, constellationsDescription, constellationStars } = req.body;

  console.log("constellationStars:", constellationStars);


  try {
    const constellation = await schemas.constellations.findById(constellationId);

    constellation.name = constellationsName;
    constellation.description = constellationsDescription;
    constellation.stars = constellationStars;
    constellation.numberOfStars = constellationStars.length;


    await constellation.save();

    res.redirect("/");
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/count', async (req, res, next) => {
  try {
    const count = await schemas.constellations.countDocuments();
    res.send({ count });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/constellationsdata', async (req, res, next) => {
  try {
    const constellations = await schemas.constellations.find({});
    res.send(constellations);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
