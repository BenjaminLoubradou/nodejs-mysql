const express = require("express")
const Router = express.Router();
const mysqlConnection = require('../connections')


Router.get("/other", (req, res) => {
    mysqlConnection.query("SELECT * from other", (err, rows, fields) =>{
        if(!err)
            {
                res.send(rows)
            }
        else   
            {
                console.log(err)
            }
    })
})

Router.post("/other", (req, res) => {
    mysqlConnection.query("INSERT INTO other SET ?", req.body, (err, results) =>{
        if(!err)
            {
                res.end(JSON.stringify(results))
            }
        else   
            {
                console.log(err)
            }
    })
    
})

Router.put("/other", (req, res) => {
    mysqlConnection.query("UPDATE other SET ?", [req.body.name,req.body.age] , (err, results) =>{
        if(!err)
            {
                res.send(JSON.stringify(results))
            }
        else   
            {
                console.log(err)
            }
    })
    
})

module.exports = Router;