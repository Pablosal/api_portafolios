const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
require("express-async-errors");
const { ProyectosRoutes } = require("./routes");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression());
console.log({ MONGO_URI });
app.use("/api/", ProyectosRoutes);
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conectado a base de datos");
  });
app.listen(3000);
