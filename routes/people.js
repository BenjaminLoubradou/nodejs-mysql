const express = require("express")
const Router = express.Router();
const mysqlConnection = require('../connections')


Router.get("/people", (req, res) => {
    mysqlConnection.query("SELECT * from people", (err, rows, fields) =>{
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

Router.post("/people", (req, res) => {
    mysqlConnection.query("INSERT INTO people SET ?", req.body, (err, results) =>{
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

Router.put("/people", (req, res) => {
    mysqlConnection.query('UPDATE `people` SET `age`=? where `name`=?', [req.body.age, req.body.name] , (err, results) =>{
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

Router.delete("/people", (req, res) => {
    mysqlConnection.query("DELETE FROM `people` WHERE `name`=?", [req.body.name] , (err, results) =>{
        if(!err)
            {
                res.end(req.body.name + ' has been deleted!');
            }
        else   
            {
                console.log(err)
            }
    })
    
})

module.exports = Router;