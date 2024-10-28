// server.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/database');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public')); // Para servir archivos HTML y CSS

// Ruta para manejar el envío de datos del formulario
app.post('/registro', (req, res) => {
  const { nombre, apellido, direccion, numero, ciudad, fecha_nacimiento, email, telefono, genero } = req.body;

  const sql = `
    INSERT INTO usuarios (nombre, apellido, direccion, numero, ciudad, fecha_nacimiento, email, telefono, genero)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.run(sql, [nombre, apellido, direccion, numero, ciudad, fecha_nacimiento, email, telefono, genero], (err) => {
    if (err) {
      console.error("Error al insertar en la base de datos:", err.message);
      res.status(500).send("Error al registrar usuario.");
    } else {
      res.send("Usuario registrado con éxito.");
    }
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});