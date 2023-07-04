const config = require('../config')
const mysql = require('mysql2')
const companyDb = require('./company-db')
const userDb = require('./user-db')
console.log(config);
const connection = mysql.createConnection({
      user : config.mySql.userName,
      host : config.mySql.host,
      password:config.mySql.password,
      database:config.mySql.dbName
}).promise()
 
module.exports = {
    connection,
    companyDb,
    userDb,
}