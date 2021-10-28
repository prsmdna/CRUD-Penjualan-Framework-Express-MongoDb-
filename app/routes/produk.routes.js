module.exports = (app) => {
  const produk = require("../controllers/produk.controller");
  const router = require("express").Router();

  router.get("/", produk.findAll);
  router.post("/", produk.create);
  router.get("/:id", produk.findOne);
  router.put("/:id", produk.update);
  router.delete("/:id", produk.delete);

  app.use("/produk", router);
};
