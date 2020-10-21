const mysql = require('mysql2')
const {dataBaseConnectionInfo} = require('./config')


const dataBasePool = mysql.createPool(dataBaseConnectionInfo)
const dataBasePoolPromise = dataBasePool.promise()

module.exports = {dataBasePoolPromise}