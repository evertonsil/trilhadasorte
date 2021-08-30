var config = require('./conect');
// var sql = require("mssql");
var mysql = require("mysql");

async function create(numbers) {
    return new Promise((resolve, reject) => {
        let sql = `Call cliente_escolhe_facil(`
        numbers.forEach(n => sql = `${sql}${n},`)
        sql = sql + '10)'

        const db = config
        db.query(sql, (error, result) => {
            if (error) return reject(error)

            console.log('db result >> ', result)
            return resolve(result)
        })
    })
}

async function createpremium(numbers) {
    return new Promise((resolve, reject) => {
        let sql = `Call cliente_escolhe_facil(`
        numbers.forEach(n => sql = `${sql}${n},`)
        sql = sql + '30)'

        const db = config
        db.query(sql, (error, result) => {
            if (error) return reject(error)

            console.log('db result >> ', result)
            return resolve(result)
        })
    })
}

async function createmedium(numbers) {
    return new Promise((resolve, reject) => {
        let sql = `Call cliente_escolhe_facil(`
        numbers.forEach(n => sql = `${sql}${n},`)
        sql = sql + '20)'

        const db = config
        db.query(sql, (error, result) => {
            if (error) return reject(error)

            console.log('db result >> ', result)
            return resolve(result)
        })
    })
}

async function getLastresults(){
    try{
        let pool = await mysql.connect(config)
        let numbs = pool.query("SELECT MAX(ID_RESULTADO),NUMERO1,NUMERO2,NUMERO3,NUMERO4,NUMERO5,NUMERO6,NUMERO7,NUMERO8,NUMERO9,NUMERO10,NUMERO11,NUMERO12,NUMERO13,NUMERO14,NUMERO15 FROM RESULTADOS_LOTOFACIL;");
        return (await numbs).recordsets;
   }
    catch(error){
        console.log(error);
    }
}

// async function getClt_escolhe_facil() {
//     try {
//         let pool = config
//         let query = `Call cliente_escolhe_facil( '1','2','3','1' )`
//         return new Promise((resolve, reject) => {
//             let numbs = pool.query(query, (error, results) => {
//                 if (error) {
//                     reject(error)
//                 }
//                 console.log(results[0]);
//                 resolve(results[0]);
//             });
//         })
//     }
//     catch (error) {
//         console.log(error);
//     }
// }


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


module.exports = {
    // getJogosbons : getJogosbons,
    getLastresults : getLastresults,
    // getClt_escolhe_facil : getClt_escolhe_facil,
    create,
    createpremium,
    createmedium
}
