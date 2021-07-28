var config = require('./conect');
const sql = require('mssql');


async function getLastresults(){
    try{
        let pool = await sql.connect(config)
        let numbs = pool.request().query("SELECT * FROM dbo.RESULTADOS_ANTERIORES$ ORDER BY ID_RESULTADO OFFSET 50 ROWS FETCH NEXT 10 ROWS ONLY");
        return (await numbs).recordsets;
   }
    catch(error){
        console.log(error);
    }
}

// async function getJogosbons(){
//     try{
//         let pool = await sql.connect(config)
//         let numbs = pool.request().query("SELECT * FROM dbo.RESULTADOS_ANTERIORES$");
//         return (await numbs).recordsets;
//    }
//     catch(error){
//         console.log(error);
//     }
// }


module.exports = {
    getLastresults: getLastresults
    // getJogosbons : getJogosbons
}