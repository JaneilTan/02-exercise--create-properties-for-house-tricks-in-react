const express = require("express");
const cors = require("cors");
const app = express();
const PropertyModel = require("./models/PropertyModel");
const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());

const formatProperty = (property) => {
  return {
    id: property._id,
    description: property.description,
    address: property.address,
    title: property.title,
    img: property.img,
    askingPrice: property.askingPrice,
  };
};

app.post("/properties", async (req, res) => {
  const { body } = req;
  const property = new PropertyModel(body);
  await property.save();
  return res.status(201).send(formatProperty(property));
});

app.get("/properties", async (req, res) => {
  const properties = await PropertyModel.find({});
  return res.status(200).send(properties.map(formatProperty));
});

app.get("/properties/:id", async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ error: "bad id" });
  }

  const property = await PropertyModel.findById(id);

  if (property === null) {
    return res.status(404).send("not found");
  }

  return res.status(200).send(formatProperty(property));
});

module.exports = app;
