const mongoose = require('mongoose');

const ProyectoSchema = mongoose.Schema({
    nombreProyecto: {
        type: String,
        required: true,
        trim: true,
    },
    objetivoGeneral: {
        type: String,
        required: true,
        trim: true,
    },
    objetivosEspecificos: {
        type: Array,
        required: true,
        trim: true,
    },
    presupuesto: {
        type: Number,
        required: true,
        trim: true,
    },
    fechaInicio: {
        type: Date,
        default: Date.now(),
    },
    fechaFin: {
        type: Date,
        default: Date.now(),
    },
    estadoProyecto: {
        type: Boolean,
        default: false,
        required: true,
    },
    faseProyecto: {
        type: String,
        default: null,
    },
    lider: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        trim: true,
    }
});

module.exports = mongoose.model('Proyecto', ProyectoSchema);