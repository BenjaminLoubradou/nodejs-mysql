const express = require('express')
const bodyParser = require('body-parser')
const mysqlConnection = require('./connections')
const PeopleRoutes = require('./routes/people')
const OtherRoutes = require('./routes/other')

let app = express()
app.use(bodyParser.json())

app.use("/", PeopleRoutes)
app.use("/", OtherRoutes)


app.listen(3000, () => console.log("mysql-app listening on port 3000"))