const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require ('../middlewares/validar-campos');

const {
    animalesGet,
    getanimalById,
    animalDelete,
    putAnimales,
    animalesPost} = require('../controllers/animal.controller');

    const { esTipoValido, existenteNombreCientifico ,existeAnimalById } = require('../helpers/db-validators_animal');

    const router = Router();

    router.get("/", animalesGet);

    router.get(
        "/:id",
        [
            check('id', 'No es un id valido').isMongoId(),
            check('id').custom(existeAnimalById),

            validarCampos
        ], getanimalById);

    router.put(
        "/:id",

        [
            check('id', 'No es un id valido').isMongoId(),
            check('id').custom(existeAnimalById),
            check("tipo").custom(esTipoValido),

            validarCampos

        ], putAnimales);

    router.post(
        "/",

        [
            check("nombre", "el nombre no puede estar vacio").not().isEmpty(),
            check("nombreCientifico", "el NombreCientifico no debe estar vacio").not().isEmpty(),
            check("familia", "la familia no puede estar vacia").not().isEmpty(),
            check("edad", "la edad no debe estar vacia").not().isEmpty(),
            check("tipo", "el tipo no puede estar vacio").not().isEmpty(),

            validarCampos,
    ], animalesPost);

    router.delete(
        "/:id",

        [

            check('id', 'No es un id valido').isMongoId(),
            check('id').custom(existeAnimalById),

            validarCampos

    ], animalDelete);


module.exports = router;

// nombre, nombreCientifico, familia, edad, tipo