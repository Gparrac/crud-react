const express = require('express');
const typeDocumentService = require('../services/typeDocument.service');
const validatorHandler = require('../middlewares/validator.handler')
const { createTypeDocument } = require('../schemas/typeDocument.schema');
const service = new typeDocumentService();
const router = express.Router();


//rutas 
router.get('/',
 async (req,res,next) => {
    try{      
      const documents = await service.getAll()
      res.json(documents);
    }catch(error){
      next(error);
    }
 }
)
router.post('/',
 validatorHandler(createTypeDocument,'body'),
 async (req,res,next) => {
   try{      
      const data = req.body
      const documents = await service.create(data)
      res.json(documents);
    }catch(error){
      next(error);
    }
 }
)
module.exports = router;