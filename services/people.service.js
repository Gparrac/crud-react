
const boom = require('@hapi/boom');
const connect = require('../conectionDb')
const sendEmail = require('../nodemailer')
class PeopleService{

     async getAll(){        
        try{
            const connection = await connect()
            const result = await connection.execute('SELECT DP.*, G.GENERO AS GENERO, TD.TIPO FROM DATOSPERSONALES DP, GENERO G, TIPODOCUMENTO TD WHERE DP.IDGENERO = G.IDGENERO AND DP.IDDOCUMNETO = TD.IDDOCUMNETO');
            return result.rows;
        }
        catch(error){
            throw boom.badData(error);
        }
    }    
    async create(data){
        try{
            const connection = await connect()
            console.log('entrando',connection)
            
            const result = await connection.execute(`INSERT INTO DATOSPERSONALES (IDPERSONA,IDGENERO,IDDOCUMNETO,NOMBRE,DOCUMENTO,EDAD,EMAIL,CELULAR,DIRECCION) VALUES (NULL,${data.idGenero},${data.idDocumento},'${data.nombre}',${data.documento},${data.edad},'${data.email}',${data.celular},'${data.direccion}')`);
            console.log('prueba=>',result)
            await connection.commit()
            await sendEmail(data.email)
            return {message:'exito!'};
        }
        catch(error){
            throw boom.badData(error);
        }
    }
}

module.exports = PeopleService;