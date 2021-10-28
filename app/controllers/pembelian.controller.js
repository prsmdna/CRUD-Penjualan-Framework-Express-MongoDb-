const { json } = require("body-parser");
const { produk } = require("../models");
const db = require("../models");

const Pembelian = db.pembelian;
const Produk = db.produk;

exports.findAll = (req, res) => {
  Pembelian.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || " Some error while retrieving pembelian.",
      });
    });
};

exports.create = (req, res) => {
  const pembelian = new Pembelian({
    produk: req.body.produk,
    distributor: req.body.distributor,
    hargaBeli: req.body.hargaBeli,
    jumlah: req.body.jumlah,
    published: req.body.published ? req.body.published : false,
    createAt: Date.now(),
  });

  pembelian.save(pembelian);
  const id = req.body.produk;
  const produks = Produk.findById(id)
    .then((produks) => {
      const hargaBeliLama = produks.hargaBeli;
      const stokLama = produks.stok;
      const hargaBeliBaru = req.body.hargaBeli;
      const stokBaru = req.body.jumlah;
      const hppLama = hargaBeliLama * stokLama;
      const hppBaru = hargaBeliBaru * stokBaru;
      const totalStok = stokLama + stokBaru;
      const hpp = hppLama + hppBaru;
      const rrt = hpp / totalStok;
      const laba = produks.laba;
      const hargaJual = rrt + laba;
      const auto = {
        hargaBeli: hargaBeliBaru,
        stok: totalStok,
        hargaJual: hargaJual,
      };
      Produk.findByIdAndUpdate(id, auto)
        .then((result) => {
          res.send(pembelian);
        })
        .catch((err) => {
          res.status(409).send({
            message: err.message || "some error while update produk.",
          });
        });
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || " Some error while create pembelian.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Pembelian.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || " Some error show pembelian.",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Pembelian.findByIdAndUpdate(id, req.body)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: "Pembelian not found",
        });
      }
      res.send({
        message: "Pembelian was updated",
      });
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || " Some error while update pembelian.",
      });
    });
};

// delete field
exports.delete = (req, res) => {
  const id = req.params.id;
  Pembelian.findByIdAndRemove(id, req.body)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: "Pembelian not found",
        });
      }
      res.send({
        message: "Pembelian was delete",
      });
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || " Some error while delete Pembelian.",
      });
    });
};
