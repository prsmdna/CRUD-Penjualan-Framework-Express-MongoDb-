const db = require("../models");

const Produk = db.produk;

exports.findAll = (req, res) => {
  Produk.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || " Some error while retrieving produk.",
      });
    });
};

exports.create = (req, res) => {
  const produk = new Produk({
    namaProduk: req.body.namaProduk,
    laba: req.body.laba,
    stok: 0,
    hargaBeli: 0,
    hargaJual: 0,
    // published: req.body.published ? req.body.published : false,
    // createAt: Date.now(),
  });

  produk
    .save(produk)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || " Some error while create produk.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Produk.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || " Some error show produk.",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Produk.findByIdAndUpdate(id, req.body)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: "Produk not found",
        });
      }
      res.send({
        message: "Produk was updated",
      });
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || " Some error while update produk.",
      });
    });
};

// delete field
exports.delete = (req, res) => {
  const id = req.params.id;
  Produk.findByIdAndRemove(id, req.body)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: "Produk not found",
        });
      }
      res.send({
        message: "Produk was delete",
      });
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || " Some error while delete produk.",
      });
    });
};
