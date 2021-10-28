const { mongoose } = require(".");

module.exports = (mongoose) => {
  // buat scema design field
  const schema = mongoose.Schema({
    produk: String,
    distributor: String,
    hargaBeli: Number,
    jumlah: Number,
    published: Boolean,
    createAt: Date,
    updateAt: Date,
    deleteAt: Date,
  });

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object._id = _id;
    return object;
  });

  const Pembelian = mongoose.model("pembelian", schema);
  return Pembelian;
};
