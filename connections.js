const mysql = require('mysql')

let mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_node_mysql",
    multipleStatements: true
})

mysqlConnection.connect((err) => {
    if(!err)
        {
            console.log("Connected")
        }
    else
        {
            console.log("Connection failed")
        }
})

module.exports = mysqlConnection