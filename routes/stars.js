const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas.js");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.post("/new", async (req, res) => {
  let starsName = req.body.starsName;
  let starsDescription = req.body.starsDescription;
  let starsConstellation= req.body.starsConstellation;
  let stars = schemas.stars;

  let qry = { name: starsName };

  await stars.findOne(qry).then(async (userData) => {
    if (!userData) {
      // Można dodać gwiazdę
      let newStars = new schemas.stars({
        name: starsName,
        description: starsDescription,
        constellation: starsConstellation
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

router.get('/:id/edit', async (req, res, next) => {
  try {
    let stars = schemas.stars;
    const star = await stars.findById(req.params.id);

    if (!star) {
      throw new Error('Star not found');
    }

    res.render('edit', { title: 'Edit Star', star: star });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.post('/:id/edit', async (req, res) => {
  try {
    const starId = req.params.id;
    const update = {
      name: req.body.starsName,
      description: req.body.starsDescription,
      constellation: req.body.starsConstellation
    };

    const UpdatedStar = await schemas.stars.findByIdAndUpdate(starId, update, { new: true });

    if (!UpdatedStar) {
      throw new Error('Star not found');
    }

    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating star');
  }
});

router.get('/count', async (req, res, next) => {
  try {
    const count = await schemas.stars.countDocuments();
    res.send({ count });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

router.get('/stardata', async (req, res, next) => {
  try {
    const stars = await schemas.stars.find({});
    res.send(stars);
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
