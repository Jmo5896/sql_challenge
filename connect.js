const mysql      = require('mysql');
module.exports = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root123',
  database : 'employeedb'
});