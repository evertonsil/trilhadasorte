var config = require('./conect');
var sql = require("mssql");
// var mysql = require("mysql");

async function getLastresults(){
    try{
        let pool = await sql.connect(config)
        let numbs = pool.query("SELECT * FROM dbo.RESULTADOS_ANTERIORES$ ORDER BY ID_RESULTADO");
        return (await numbs).recordsets;
   }
    catch(error){
        console.log(error);
    }
}

async function getClt_escolhe_facil(){
    try{
        let pool = await sql.connect(config)
        let numbs = pool.request().query("Call cliente_escolhe_facil(9,5,5)");
        return (await numbs).recordsets;
   }
    catch(error){
        console.log(error);
    }
}


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
    getLastresults : getLastresults,
    getJogosbons : getJogosbons,
    getClt_escolhe_facil : getClt_escolhe_facil
}

// export default getLastresults;