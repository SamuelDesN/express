const express = require('express');
const app = express();

// Tu lógica aquí
app.get('/', (req, res) => {
  res.status(200).send('¡Hola desde el backend en Vercel!');
});

module.exports = app;
