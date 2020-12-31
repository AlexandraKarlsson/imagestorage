
const HOST = process.env.SQL_HOST;
const USER = process.env.SQL_USER;
const PASSWORD = process.env.SQL_PASSWORD;
const DATABASE = process.env.SQL_DATABASE;

const dataBaseConnectionInfo = {
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE
}
console.log('dataBaseConnectionInfo:')
console.log(dataBaseConnectionInfo)

module.exports = {dataBaseConnectionInfo}