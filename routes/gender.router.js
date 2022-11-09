const express = require("express");
const genderService = require("../services/gender.service");
const validatorHandler = require("../middlewares/validator.handler");
const { createGender } = require("../schemas/gender.schema");
const service = new genderService();
const router = express.Router();

//rutas
router.get("/", async (req, res, next) => {
  try {
    const documents = await service.getAll();
    res.json(documents);
  } catch (error) {
    next(error);
  }
});
router.post(
  "/",
  validatorHandler(createGender, "body"),
  async (req, res, next) => {
    try {
      const data = req.body;
      const documents = await service.create(data);
      res.json(documents);
    } catch (error) {
      next(error);
    }
  }
);
module.exports = router;
