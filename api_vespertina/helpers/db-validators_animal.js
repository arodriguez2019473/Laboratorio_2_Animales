const Animales = require('../models/animales');

const esTipoValido = async (tipo = '') => {
    const existeTipo = await Tipo.findOne({tipo});

    if (!existeTipo) {
        throw new Error(`el tipo ${ tipo } no existe en el sistema`);
    }

}
