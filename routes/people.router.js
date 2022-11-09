const express = require("express");
const peopleService = require("../services/people.service");
const service = new peopleService();
const router = express.Router();
const validatorHandler = require("../middlewares/validator.handler");
const {
  createPeopleSchema,
  updatePeopleSchema,
} = require("../schemas/people.schema");
const boom = require("@hapi/boom");
//rutas
router.get("/", async (req, res, next) => {
  try {
    const emp = await service.getAll();
    res.json(emp);
    
  } catch (error) {
    throw boom.badData(error);
  }
});
router.post(
  "/",
  validatorHandler(createPeopleSchema, "body"),
  async (req, res, next) => {
    data = req.body;
    try {
      const emp = await service.create(data);
      res.json({
        message:emp
      });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
