const dbOperations = require("../db/dboperations")
module.exports = {
        async getlastresult(req,res){
            res.json(await dbOperations.getLastresults())
        },
    // async getclt_escolhe_facil(req,res){
    //     res.json(await dbOperations.getClt_escolhe_facil())
    // },

    async create(req,res) {
        console.log('body >> ', req.body)
        try {
            return res.json(await dbOperations.create(req.body.numbers))
        } catch(error) {
            console.log("error ", error)
            return res.status(500).json({ error })
        } 
    },

    async createpremium(req,res) {
        console.log('body >> ', req.body)
        try {
            return res.json(await dbOperations.create(req.body.numbers))
        } catch(error) {
            console.log("error ", error)
            return res.status(500).json({ error })
        } 
    },

    async createmedium(req,res) {
        console.log('body >> ', req.body)
        try {
            return res.json(await dbOperations.create(req.body.numbers))
        } catch(error) {
            console.log("error ", error)
            return res.status(500).json({ error })
        } 
    }
    // async getjogosbons(req,res){
    //     res.json(await dbOperations.getJogosbons())
    // }
}