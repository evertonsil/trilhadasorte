var sql = require("mssql");

var dbConfig = {
    server: "DESKTOP-FVJINHE\INSTANCIA_TRILHA",
    database: "LOTOMANIA_SUPER70",
    user: "SA",
    password: "Brasil2020*",
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
        req.query("SELECT * FROM JOGOS_GERADOS_DIFERENTES", function (err, recordset){
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