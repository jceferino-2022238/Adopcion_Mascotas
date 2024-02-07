const {Schema, model} = require('mongoose');
const MascotaSchema = Schema({
    nombreMascota:{
        type: String,
        required: [true, 'El nombre de la mascota es obligatorio']
    },
    especie:{
        type: String,
        required: [true, 'La especie de la mascota es obligatoria']
    },
    edad:{
        type: String,
        required: [true, 'La edad de la mascota es obligatoria']
    },
    tamaño:{
        type: String,
        required: [true, 'El tamaño de la mascota es obligatorio']
    },
    peso:{
        type: String,
        required: [true, 'El peso de la mascota es obligatorio']
    },
    estadoAdopcion:{
        type: String,
        required: [true, 'El estado de adopción es obligatorio']
    },
    lugarCrianza:{
        type: String,
        required: [true, 'El lugar de crianza de la mascota es obligatorio']
    },
    estado:{
        type: Boolean,
        default: true
    }
});

module.exports = model('Mascota', MascotaSchema);