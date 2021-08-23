const dbOperations = require("../db/dboperations")
module.exports = {
    async getlastresult(req,res){
        res.json(await dbOperations.getLastresults())
    },
    async getclt_escolhe_facil(req,res){
        res.json(await dbOperations.getClt_escolhe_facil())
    },
    async getjogosbons(req,res){
        res.json(await dbOperations.getJogosbons())
    }
}