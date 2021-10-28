module.exports = (app) => {
  const pembelian = require("../controllers/pembelian.controller");
  const router = require("express").Router();

  router.get("/", pembelian.findAll);
  router.post("/", pembelian.create);
  router.get("/:id", pembelian.findOne);
  router.put("/:id", pembelian.update);
  router.delete("/:id", pembelian.delete);

  app.use("/pembelian", router);
};
