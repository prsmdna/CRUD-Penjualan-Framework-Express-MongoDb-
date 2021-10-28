const db = require("../models");

const Distributor = db.distributor;

exports.findAll = (req, res) => {
  Distributor.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || " Some error while retrieving distributor.",
      });
    });
};

exports.create = (req, res) => {
  const distributor = new Distributor({
    nama: req.body.nama,
    published: req.body.published ? req.body.published : false,
    createAt: Date.now(),
  });

  distributor
    .save(distributor)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || " Some error while create distributor.",
      });
    });
};

exports.findOne = (req, res) => {
  const id = req.params.id;

  Distributor.findById(id)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || " Some error show distributor.",
      });
    });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Distributor.findByIdAndUpdate(id, req.body)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: "Distributor not found",
        });
      }
      res.send({
        message: "Distributor was updated",
      });
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || " Some error while update distributor.",
      });
    });
};

// delete field
exports.delete = (req, res) => {
  const id = req.params.id;
  Distributor.findByIdAndRemove(id, req.body)
    .then((result) => {
      if (!result) {
        res.status(404).send({
          message: "Distributor not found",
        });
      }
      res.send({
        message: "Distributor was delete",
      });
    })
    .catch((err) => {
      res.status(409).send({
        message: err.message || " Some error while delete Distributor.",
      });
    });
};
