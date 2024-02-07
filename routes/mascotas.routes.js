const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { mascotasGet, 
        getMascotaById, 
        putMascotas, 
        mascotasPost, 
        mascotasDelete } = require('../controller/mascotas.controller');
const { existeMascotaById } = require('../helpers/db-validators');

const router = Router();

router.get('/', mascotasGet);

router.get(
    '/:id',
    [
        check('id', 'No es un id válido').isMongoId(),
        check('id').custom(existeMascotaById),
        validarCampos
    ], getMascotaById);

router.put(
    '/:id',
    [
        check('id', 'No es un id válido').isMongoId(),
        check('id').custom(existeMascotaById),
        validarCampos
    ], putMascotas);

router.post(
    '/',
    [
        check('nombreMascota', 'El nombre de la mascota no puede estar vacío').not().isEmpty(),
        check('especie', 'La especie de la mascota no puede estar vacía').not().isEmpty(),
        check('estadoAdopcion', 'El estado de adopcion no puede estar vacío').not().isEmpty(),
        check('lugarCrianza', 'El lugar donde se crio el animal no puede estar vacío').not().isEmpty(),
        validarCampos
    ], mascotasPost);

router.delete(
    "/:id",
    [
        check('id', 'No es un id válido').isMongoId(),
        check('id').custom(existeMascotaById),
        validarCampos
    ], mascotasDelete);

module.exports = router;