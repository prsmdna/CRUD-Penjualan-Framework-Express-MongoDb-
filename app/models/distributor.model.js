const { mongoose, posts } = require(".");

module.exports = (mongoose) => {
  // buat scema design field
  const schema = mongoose.Schema({
    nama: String,
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

  const Distributor = mongoose.model("distributor", schema);
  return Distributor;
};
