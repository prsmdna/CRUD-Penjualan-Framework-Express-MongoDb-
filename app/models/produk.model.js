const { mongoose } = require(".");

module.exports = (mongoose) => {
  // buat scema design field
  const schema = mongoose.Schema({
    namaProduk: String,
    hargaBeli: Number,
    hargaJual: Number,
    stok: Number,
    laba: Number,
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

  const Produk = mongoose.model("produk", schema);
  return Produk;
};
