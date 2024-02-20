const { Schema, model } = require('mongoose');

const AnimalesSchema = Schema({

    nombre:{
        type: String,
        require: [true, 'el nombre es obligatorio']
    },

    nombreCientifico:{
        type: String,
        require:[true, 'el nombreCientifico es obligatorio'] 

    },

    familia:{
        type:String,
        require:[true, 'el campo de familia es obligatoria']

    },

    habitad:{
        type:String,
        require:[true, 'el campo del habitad es obligatoria']
    },
    
    estado:{
        type: Boolean,
        default:true
    },

    edad:{
        type:String,
        require:['el campo de edad es obligatoria']
    },

    tipo:{
        type:String,
        require:true,
        enum: ["Hervivoro","Carnivoro","omnivoros"]
    }


});

module.exports = model('Animales', AnimalesSchema);