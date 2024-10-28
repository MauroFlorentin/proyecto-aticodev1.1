// database.js
const sqlite3 = require('sqlite3').verbose();

// Conexión a la base de datos
const db = new sqlite3.Database('./db/usuarios.db', (err) => {
  if (err) {
    console.error("Error al abrir la base de datos:", err.message);
  } else {
    console.log("Conectado a la base de datos SQLite.");
    // Crear tabla si no existe
    db.run(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        apellido TEXT NOT NULL,
        direccion TEXT NOT NULL,
        numero INTEGER NOT NULL,
        ciudad TEXT NOT NULL,
        fecha_nacimiento TEXT,
        email TEXT NOT NULL UNIQUE,
        telefono TEXT,
        genero TEXT
      )
    `);
  }
});

module.exports = db;