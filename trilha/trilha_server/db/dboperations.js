var config = require('./conect');
var sql = require("mssql");


async function getPuroosso(){
  return{
      data: ["algma coisa" , "outracoisa"]
  }
}


async function getLastresults(){
    try{
        let pool = await sql.connect(config)
        let numbs = pool.request().query("SELECT * FROM dbo.RESULTADOS_ANTERIORES$ ORDER BY ID_RESULTADO 50 ROWS FETCH NEXT 1 ROWS ONLY");
        return (await numbs).recordsets;
   }
    catch(error){
        console.log(error);
    }
}

async function getClt_escolhe_facil(){
    try{
        let pool = await sql.connect(config)
        let numbs = pool.request().query("Call cliente_escolhe_facil(5,15,25)");
        return (await numbs).recordsets;
   }
    catch(error){
        console.log(error);
    }
}


async function getJogosbons(){
    try{
        let pool = await sql.connect(config)
        let numbs = pool.request().query("SELECT * FROM dbo.Jogos_bons$ ORDER BY ID_RESULTADO OFFSET 50 ROWS FETCH NEXT 1 ROWS ONLY");
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
    getClt_escolhe_facil : getClt_escolhe_facil
}

// export default getLastresults;