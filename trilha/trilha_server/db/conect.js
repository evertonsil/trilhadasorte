// var sql = require("mssql");
var mysql = require("mysql");
// const mysql = require('mysql2');

var dbConfig = mysql.createConnection({
  host     : 'mychooice.com.br',
  user     : 'mychoo70_trilhadasorte',
  database : "mychoo70_trilhadasorte",
  password : '{XKzyP60Z0[c'
});

dbConfig.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
    console.log('connected as id ' + dbConfig.threadId);
});

module.exports = {dbConfig};



// // -------------------------Online-------------------------//
// const dbConfig = {
//   host: "mychooice.com.br",
//   user: "mychoo70_trilhadasorte",
//   database: "mychoo70_trilhadasorte",
//   password: "{XKzyP60Z0[c",
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// };


// -------------------------LOCALHOST-------------------------//

// var dbConfig = {
//     server: "DESKTOP-FVJINHE",
//     database: "LOTOMANIA_SUPER70",
//     user: "sa",
//     password: "Brasil2020*",
//     port: 1433,
//     options: {
//         trustServerCertificate: true
//     }
// };


// function getEmp(){
//     var conn = new sql.ConnectionPool(dbConfig);
//     var req = new sql.Request(conn);    
// }


// module.exports = dbConfig;
// getEmp();

