const animales = require('../models/animales');
const Animales = require('../models/animales');
const Tipo = require('../models/tipo');
const tipo = require('../models/tipo');

const esTipoValido = async (tipo = '') => {
    const existeTipo = await Tipo.findOne({tipo});

    if (!existeTipo) {
        throw new Error(`el tipo ${ tipo } no existe en el sistema`);
    }

}
const existenteNombreCientifico = async(nombreCientifico = '') =>{
    const existeNombreCientifico = await Animales.findOne({nombreCientifico});

    if(existeNombreCientifico){

        throw new Error(`el nombre ${ nombreCientifico } ya existe`)
    }
}
const existeAnimalById = async (id = '') =>{

    const existeAnimal = await Animales.findOne({id});
    if(existeAnimal){
        throw new Error(`El animal con el ${ _id } no existe`)
    }
}

module.exports = {

    esTipoValido,
    existeAnimalById,
    existenteNombreCientifico

}