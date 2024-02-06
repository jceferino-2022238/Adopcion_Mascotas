const Role = require('../models/role');
const Usuario = require('../models/usuario');
const Mascota = require('../models/mascotas');

const existenteNombreMascota = async (role = '') =>{
    const existeNM = await Mascota.findOne({nombreMascota});
    if(existeNM){
        throw new Error(`El nombre ${nombreMascota} ya se ha usado en una mascota`);
    }
}
const esRoleValido = async (role = '') =>{
    const existeRole = await Role.findOne({role});
    if(!existeRole){
        throw new Error(`El role ${role} no existe en la base de datos`);
    }
}

const existenteEmail = async (correo = '') =>{
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail){
        throw new Error(`El correo ${correo} ya existe`);
    }
}

const existeUsuarioById = async (id = '') =>{
    const existeUsuario = await Usuario.findOne({id});
    if(existeUsuario){
        throw new Error(`No existe el usuario con el id ${id}`);
    }
}

const existeMascotaById = async (id = '') =>{
    const existeMI = await Mascota.findOne({id});
    if(existeMI){
        throw new Error(`No existe una mascota con el id ${id}`)
    }
}

module.exports = {
    esRoleValido,
    existenteEmail,
    existeUsuarioById,
    existenteNombreMascota,
    existeMascotaById
}