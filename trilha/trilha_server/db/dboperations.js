var config = require('./conect');
var sql = require("mssql");
// var sql = require("mysql");


async function getPuroosso(){
  return{
      data: ["algma coisa" , "outracoisa"]
  }
}


async function getLastresults(){
    try{
        let pool = await sql.connect(config)
        let numbs = pool.request().query("SELECT * FROM dbo.RESULTADOS_ANTERIORES$ ORDER BY ID_RESULTADO");
        return (await numbs).recordsets;
   }
    catch(error){
        console.log(error);
    }
}

// async function getClt_escolhe_facil(){
//     try{
//         let pool = await sql.connect(config)
//         let numbs = pool.request().query("SELECT * FROM HISTORICO_BASE_LOTOFACIL order by ID_RESULTADO");
//         return (await numbs).recordsets;
//    }
//     catch(error){
//         console.log(error);
//     }
// }


async function getJogosbons(){
    try{
        let pool = await sql.connect(config)
        let numbs = pool.request().query("SELECT * FROM dbo.Jogos_bons$ ORDER BY ID_RESULTADO");
        return (await numbs).recordsets;
   }
    catch(error){
        console.log(error);
    }
    
}


module.exports =  {
    getPuroosso : getPuroosso,
    getLastresults : getLastresults,
    getJogosbons : getJogosbons,
    // getClt_escolhe_facil : getClt_escolhe_facil
}

// export default getLastresults;