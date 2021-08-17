var sql = require("mssql");

// var dbConfig = {
//         server: "mychooice.com.br",
//         database: "mychoo70_trilhadasorte",
//         user: "mychoo70_trilhadasorte",
//         password: "{XKzyP60Z0[c",
//         port: 3306,
//         options: {
//             trustServerCertificate: true
//         }
//     };


var dbConfig = {
    server: "DESKTOP-FVJINHE",
    database: "LOTOMANIA_SUPER70",
    user: "sa",
    password: "Brasil2020*",
    port: 1433,
    options: {
        trustServerCertificate: true
    }
};


function getEmp(){
    var conn = new sql.ConnectionPool(dbConfig);
    var req = new sql.Request(conn);       
}

module.exports = dbConfig;
  getEmp();




//   const dboperations = require('./dboperations');

// dboperations.getLastresults().then(result => {
//     console.log(result);
// })

// dboperations.getJogosbons().then(result => {
//     console.log(result);
// })