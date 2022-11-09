require('dotenv').config()
const oracledb  = require('oracledb');
async function connect(){
    const connect =  await oracledb.getConnection({
        user: process.env.USER_DB,
        password: process.env.PASSWORD_DB,
        connectionString: process.env.CONNECTION_STR
    });        
     return connect;
}
//  connect().then(async (rta)=>{
//     console.log('esperando..',rta)
//     const result = await rta.execute("INSERT INTO DATOSPERSONALES (IDPERSONA,IDGENERO,IDDOCUMNETO,NOMBRE,EMAIL) VALUES ('',32,22,'oscar','jola@gmail.com')");
//     rta.commit();
//     console.log('prueba',result)
//  })


module.exports = connect;