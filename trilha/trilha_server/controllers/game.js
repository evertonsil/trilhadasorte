const dbOperations = require("../db/dboperations")
module.exports = {
    async index(req,res){
        res.json(await dbOperations.getPuroosso())
    },
    async getlastresult(req,res){
        res.json(await dbOperations.getLastresults())
    }
}