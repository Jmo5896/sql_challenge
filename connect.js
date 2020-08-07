const mysql      = require('mysql');
module.exports = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root1234',
  database : 'employeedb'
});