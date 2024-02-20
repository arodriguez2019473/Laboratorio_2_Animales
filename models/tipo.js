const { Schema, model } = require('mongoose');

const TipoSchema = Schema ({

    role:{

        type: String,
        require: [true, 'El tipo es obligatorio']

    }

});

module.exports = model('Tipo', TipoSchema);