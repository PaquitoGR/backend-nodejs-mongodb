const mongoose = require('mongoose');

mongoose.connection.on('error', err => {
  console.log('Error de conexión', err);
});

mongoose.connection.once('open', () => {
  console.log('Conexión establecida con mongodb en', mongoose.connection.name);
});

mongoose.connect('mongodb://127.0.0.1/cursonode');