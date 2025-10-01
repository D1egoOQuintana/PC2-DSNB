const mysql = require("mysql2");

const conexionExtraña = mysql.createConnection({
  host: process.env.ZK_DB_HOST,
  user: process.env.ZK_DB_USR,
  password: process.env.ZK_DB_PASS,
  database: process.env.ZK_DB_NAME
});

conexionExtraña.connect(err => {
  if (err) {
    console.error("Error conexión BD:", err);
    return;
  }
  console.log("BD conectada correctamente");
});

module.exports = conexionExtraña;
