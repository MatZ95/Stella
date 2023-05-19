const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/new", async (req, res) => {
  let constellationsName = req.body.constellationsName;
  let constellationsDescription = req.body.constellationsDescription;
  let constellations = schemas.constellations;

  let qry = { name: constellationsName };

  await constellations.findOne(qry).then(async (userData) => {
    if (!userData) {
      // Można dodać gwiazdę
      let newConstellations = new schemas.constellations({
        name: constellationsName,
        description: constellationsDescription
      });

      await newConstellations.save();
    }
  });

  res.redirect("/");
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

    res.render('edit', { title: 'Edit Constellation', constellation: constellation });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/:id/edit', async (req, res) => {
  try {
    const constellationId = req.params.id;
    const update = {
      name: req.body.constellationsName,
      description: req.body.constellationsDescription
    };

    const UpdatedConstellation = await schemas.constellations.findByIdAndUpdate(constellationId, update, { new: true });

    if (!UpdatedConstellation) {
      throw new Error('Constellation not found');
    }

    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating constellation');
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
