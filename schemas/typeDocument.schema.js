const Joi = require('joi');

const idDocumento = Joi.number();
const tipo = Joi.string().max(20);

const createTypeDocument = Joi.object({
    tipo: tipo.required()
});
const updateTypeDocument = Joi.object({
    idDocumento: idDocumento.required(),
    tipo: tipo.required()
})

module.exports = { createTypeDocument, updateTypeDocument }