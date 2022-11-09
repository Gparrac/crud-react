const express = require('express');
const peopleRouter = require('./people.router');
const typeDocumentRouter = require('./typeDocument.router');
const genderRouter = require('./gender.router');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1',router);
    router.use('/people',peopleRouter);
    router.use('/type-document',typeDocumentRouter);
    router.use('/gender',genderRouter);
}

module.exports = routerApi;