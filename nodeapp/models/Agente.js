const mongoose = require('mongoose');

// definir el esquema de los agentes
const agenteSchema = mongoose.Schema({
  name: { type: String, index: true },
  age: { type: Number, index: true, min: 18, max: 120 }
}, {
  // collection: 'agentes' // para forzar un nombre concreto de colección
});

// Tipos de métodos:
//  - Estático: método que está en el modelo (p.e. Agente.lista())
agenteSchema.statics.lista = function(filtro, skip, limit, sort, fields) {
  const query = Agente.find(filtro); // devuelve un objeto de tipo query que es un thenable
  query.skip(skip);
  query.limit(limit);
  query.sort(sort);
  query.select(fields);
  return query.exec();
}
//  - De instancia: método que tienen las instancias (p.ej Agente.saluda())
// agenteSchema.methods.saluda = function() {  // no podría ser arrow function,que su this sería global
//   console.log('Hola, soy el agente ' + this.name);  // mongoose hace la asignación del this
// }


// crear el modelo de agente
const Agente = mongoose.model('Agente', agenteSchema);

// exportar el modelo de agente (opcional)
module.exports = Agente;