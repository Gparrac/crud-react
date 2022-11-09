const Joi = require('joi');

const id = Joi.number();
const nombre = Joi.string().max(20);
const idGenero = Joi.number();
const idDocumento = Joi.number();
const edad = Joi.number().min(5);
const documento = Joi.number();
const celular  = Joi.number();
const direccion = Joi.string().max(40);
const email = Joi.string().email().max(45);

const createPeopleSchema = Joi.object({
    nombre: nombre.required(),
    idGenero: idGenero.required(),
    idDocumento: idDocumento.required(),
    edad: edad.required(),
    documento: documento.required(),
    celular: celular.required(),
    direccion: direccion.required(),
    email: email.required(),
})
const updatePeopleSchema = Joi.object({
    id: id.required(),
    
})

module.exports = { createPeopleSchema, updatePeopleSchema }