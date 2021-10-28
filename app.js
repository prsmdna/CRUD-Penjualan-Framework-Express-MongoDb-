const express = require("express");
const cors = require("cors");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
// const swaggerDocument = require("./tes.json");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const options = require("./config/swagger.config");

const specs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs, { explorer: true }));
const db = require("./app/models/index");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })

  .then(() => {
    console.log(`Database connected succesfull!`);
  })
  .catch((err) => {
    console.log(`Cannot connected database!`, err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({
    message: "welcome to belajar rest api",
  });
});

require("./app/routes/produk.routes")(app);
require("./app/routes/distributor.routes")(app);
require("./app/routes/pembelian.routes")(app);

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
