const dbConfig = require("../../config/db.config");

// membuat objek untuk mongoose
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

// membuat objek db
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.produk = require("./produk.model")(mongoose);
db.distributor = require("./distributor.model")(mongoose);
db.pembelian = require("./pembelian.model")(mongoose);

module.exports = db;
