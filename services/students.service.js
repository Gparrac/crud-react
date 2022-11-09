
//EN PROCESO-----
const connect = require('../conectionDb');
const boom = require('@hapi/boom');
class studentsService{
     async getAll(){        
        try{
            const connection = await connect();
            const result = await connection.execute('SELECT ES.* FROM ESTUDIANTES ES, ');
            return result;
        }
        catch(error){
            throw boom.conflict(error);
        }
    }    
    async create(data){        
        try{
            const connection = await connect();
            const result = await connection.execute("INSERT INTO ESTUDIANTES (IDPERSONA,IDGENERO,IDDOCUMNETO,NOMBRE,DOCUMENTO,EDAD,EMAIL,CELULAR,DIRECCION) VALUES (NULL,32,22,'oscar',112323,18,'asd@gmail.com',32343242,'calle1234-2')");
            await connection.commit()
            return {message:'exito!'};
            
        }
        catch(error){
            throw boom.conflict(error);
        }
    }    
}

module.exports = studentsService;