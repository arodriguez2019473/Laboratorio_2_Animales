const bcryptjs = require ('bcryptjs');
const Animales = require('../models/animales');
const { response } = require('express');

const animalesGet = async (req, res = response) => {

    const {limite, desde} =req.query;
    const query = {estado:response} 
    const [total, animales] = await Promise.all([

        Animales.countDocuments(query),
        Animales.find(query)
        .skip(Number(desde))
        .limit(Number(limite))

    ]);

    res.status(200).json({

        total,
        animales

    });
    
}


const getanimalById = async (req, res) =>{

    const {id} = req.params;
    const animal = await Animales.findOne({_id: id});

    res.status(200).json({
        animal

    });

}

const animalDelete = async (req, res) =>{
    
    const{id} = req.params;
    const animal = await Animales.findByIdAndUpdate(id, {estado: false});

    res.status(200).json({

        ms: 'Animal Eliminado exitosamente ;(',
        animal

    });

}

const putAnimales = async (req, res = response) =>{

    const { id } = req.params;
    const { _id,  nombre, edad, ...resto } = req.body;

    if(nombre){

        const salt = bcryptjs.genSaltSync();
        resto.nombre = bcryptjs.hashSync(nombre, salt);
    }

    const animal = await Animales.findByIdAndUpdate(id, resto);

    res.status(200).json({
        msg: ':) el animal ha sido actualizadoo correctamente',
        animal

    });

}

const animalesPost = async (req, res) =>{

    const {nombre, nombreCientifico, familia, edad, tipo} = req.body;
    const animal = new Animales({nombre, nombreCientifico, familia, edad, tipo});

    await animal.save();
    res.status(200).json({
        animal

    });

}

module.exports = {
    animalesGet,
    getanimalById,
    animalDelete,
    putAnimales,
    animalesPost
}