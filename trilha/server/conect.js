var sql = require("mssql");

var dbConfig = {
    server: "localhost",
    database: "trilha",
    user: "SA",
    password: "!Diaensolarado1",
    port: 1433,
    options: {
        trustServerCertificate: true
    }
};




function getEmp(){
    var conn = new sql.ConnectionPool(dbConfig);
    var req = new sql.Request(conn);

    conn.connect(function (err){
        if (err) {
            console.log(err);
            return;
        }
        req.query("SELECT * FROM teste", function (err, recordset){
            if(err){
                console.log(err);
            }
            else {
                console.log(recordset);
            }
            conn.close();
    });
});

}

getEmp();