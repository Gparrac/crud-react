const Joi = require('joi');

const idGenero = Joi.number();
const genero = Joi.string().max(20);

const createGender = Joi.object({
    genero: genero.required()
});
const updateGender = Joi.object({
    idGenero: idGenero.required(),
    genero: genero.required()
})

module.exports = { createGender , updateGender }