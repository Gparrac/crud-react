
const connect = require('../conectionDb');
const boom = require('@hapi/boom');
class genderService{
     async getAll(){   
            try{
                const check = await connect(); 
                const result = await check.execute('SELECT * FROM bien2022.GENERO');  
                console.log(result)

                return result.rows
            }catch(error){
                throw boom.conflict('Error en el servidor!!');
            }
    }    
    async create(data){  
        try{
            const check = await connect();
            const result = await check.execute(`INSERT INTO GENERO VALUES (NULL,'${data.genero}')`);              
            await check.commit()
            // await check.close()
            return {message:'exito!'};
        }catch(error){
            console.log(error);
            throw boom.conflict('Error en el servidor!!');
        }

    }    
}

module.exports = genderService;