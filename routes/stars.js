const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const schemas = require("../models/schemas.js");
const { MongoClient, ObjectId } = require("mongodb");
const { mongoUrl, dbName } = require('../config.js');

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

router.get('/get', async (req, res) => {
  try {
    const client = await MongoClient.connect(mongoUrl);
    const db = client.db(dbName);

    const data = await db.collection('stars').find().toArray();

    res.json(data);

    client.close();

  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }

});

router.delete('/delete/:id', async (req, res) => {
  try {
    const client = await MongoClient.connect(mongoUrl);
    const db = client.db(dbName);

    const result = await db.collection('stars').deleteOne({ _id: new ObjectId(req.params.id) });

    res.json({ message: 'Deleted successfully', result });
    client.close();

  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
