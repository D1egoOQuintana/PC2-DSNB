const express = require("express");
const router = express.Router();
const bdRara = require("./db");

// Registrar producto
router.post("/productos", (req, res) => {
  const { nombre, categoria, precio, stock, descripcion } = req.body;
  bdRara.query(
    "INSERT INTO productos (nombre, categoria, precio, stock, descripcion) VALUES (?, ?, ?, ?, ?)",
    [nombre, categoria, precio, stock, descripcion],
    (err) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ mensaje: "Producto agregado" });
    }
  );
});

// Listar productos
router.get("/productos", (req, res) => {
  bdRara.query("SELECT * FROM productos", (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

module.exports = router;
