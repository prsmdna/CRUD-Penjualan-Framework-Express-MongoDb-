module.exports = (app) => {
  const distributor = require("../controllers/distributor.controller");
  const router = require("express").Router();

  router.get("/", distributor.findAll);
  router.post("/", distributor.create);
  router.get("/:id", distributor.findOne);
  router.put("/:id", distributor.update);
  router.delete("/:id", distributor.delete);

  app.use("/distributor", router);
};
