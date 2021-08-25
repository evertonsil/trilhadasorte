var config = require('./conect');
// var sql = require("mssql");
var mysql = require("mysql");

// async function getLastresults(){
//     try{
//         let pool = await sql.connect(config)
//         let numbs = pool.query("SELECT * FROM dbo.RESULTADOS_ANTERIORES$ ORDER BY ID_RESULTADO");
//         return (await numbs).recordsets;
//    }
//     catch(error){
//         console.log(error);
//     }
// }














async function getClt_escolhe_facil(){
        try{
            let pool = config
            let query = `Call cliente_escolhe_facil( '1','2','3','1' )`
            return new Promise((resolve, reject) => {
                let numbs =  pool.query(query, (error, results) => {
                    if (error) {
                        reject(error)
                    }
                    console.log(results[0]);
                    resolve(results[0]);
                });
            })
            
            
        }
        catch(error){
            console.log(error);
        }
}


// async function getJogosbons(){
//     try{
//         let pool = await sql.connect(config)
//         let numbs = pool.request().query("SELECT * FROM dbo.Jogos_bons$ ORDER BY ID_RESULTADO");
//         return (await numbs).recordsets;
//    }
//     catch(error){
//         console.log(error);
//     }
    
// }


module.exports =  {
    // getJogosbons : getJogosbons,
    // getLastresults : getLastresults
    getClt_escolhe_facil : getClt_escolhe_facil
}
