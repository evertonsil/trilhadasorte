// var ConnectionPool = require('mssql').Connection;  
//     var config = {  
//         server: 'DESKTOP-FVJINHE\\INSTANCIA_TRILHA',  //update me
//         authentication: {
//             type: 'default',
//             options: {
//                 userName: 'SA', //update me
//                 password: 'Brasil2020*'  //update me
//             }
//         },
//         options: {
//             // If you are on Microsoft Azure, you need encryption:
//             encrypt: true,
//             database: 'LOTOMANIA_SUPER70'  //update me
//         }
//     }; 
//     var connection = new ConnectionPool(config);  
//     connection.on('connect', function(err) {  
//         // If no error, then good to proceed.  
//         console.log("Connected");  
//         executeStatement();  
//     });  
    
//     connection.connect();
  
//     var Request = require('mssql').Request;  
//     var TYPES = require('mssql').TYPES;  
  
//     function executeStatement() {  
//         request = new Request("SELECT * FROM wp0v_users", function(err) {  
//         if (err) {  
//             console.log(err);}  
//         });  
//         var result = "";  
//         request.on('row', function(columns) {  
//             columns.forEach(function(column) {  
//               if (column.value === null) {  
//                 console.log('NULL');  
//               } else {  
//                 result+= column.value + " ";  
//               }  
//             });  
//             console.log(result);  
//             result ="";  
//         });  
  
//         request.on('done', function(rowCount, more) {  
//         console.log(rowCount + ' rows returned');  
//         });  
        
//         // Close the connection after the final event emitted by the request, after the callback passes
//         request.on("requestCompleted", function (rowCount, more) {
//             connection.close();
//         });
//         connection.execSql(request);  
//     }

var sql = require("mssql");

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

module.exports = dbConfig;

function getEmp(){
    var conn = new sql.ConnectionPool(dbConfig);
    var req = new sql.Request(conn);

    conn.connect(function (err){
        if (err) {
            console.log(err);
            return;
        }
    //     req.query("SELECT * FROM dbo.RESULTADOS_ANTERIORES$ ORDER BY ID_RESULTADO OFFSET 50 ROWS FETCH NEXT 10 ROWS ONLY", function (err, recordset){
    //         if(err){
    //             console.log(err);
    //         }
    //         else {
    //             console.log(recordset);
    //         }
    //         conn.close();
    //         return recordset
    // });

//     req.query("SELECT * FROM dbo.Jogos_bons$ ORDER BY ID_RESULTADO OFFSET 50 ROWS FETCH NEXT 70 ROWS ONLY", function (err, recordset){
//         if(err){
//             console.log(err);
//         }
//         else {
//             console.log(recordset);
//         }
//         conn.close();
//         return recordset
// });

});

}
  getEmp();