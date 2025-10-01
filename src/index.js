const express = require("express");
const bodyParser = require("body-parser");
const rutasLocas = require("./routes");

const app = express();
app.use(bodyParser.json());
app.use("/api", rutasLocas);

const PUERTO = 8000;
app.listen(PUERTO, () => {
  console.log("Servidor corriendo en puerto", PUERTO);
});
