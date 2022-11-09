
const connect = require('../conectionDb');
const boom = require('@hapi/boom');
class typeDocumentService{
     async getAll(){        
        try{
            const connection = await connect();
            const result = await connection.execute('SELECT TP.* FROM TIPODOCUMENTO TP');
            return result.rows;
        }
        catch(error){
            throw boom.conflict(error);
        }
    }    
    async create(data){        
        try{
            const connection = await connect();
            const result = await connection.execute(`INSERT INTO TIPODOCUMENTO VALUES (NULL,'${data.tipo}')`);
            await connection.commit()
            return {message:'exito!'};
            
        }
        catch(error){
            throw boom.conflict(error);
        }
    }    
}

module.exports = typeDocumentService;