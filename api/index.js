const express = require("express");
const mongoose = require("mongoose");
const { MONGO_URI } = require("./config");
const { ProyectosRoutes } = require("./routes");


const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
console.log({MONGO_URI});
app.use("/api/", ProyectosRoutes);
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Conectado a base de datos");
  });
app.listen(3000);


