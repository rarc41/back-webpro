const mongoose = require("mongoose");

const InscripcionSchema = mongoose.Schema({
  estado: {
    type: Boolean,
    default: false,
    // required: true,
  },

  proyecto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Proyecto",
    required: true,
  },
  estudiante: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Usuario",
    required: true,
  },

  fechaIngreso: {
    type: Date,
    default: Date.now(),
  },

  fechaEgreso: {
    type: Date,
    default: null
  },
});

module.exports = mongoose.model("Inscripcion", InscripcionSchema);
