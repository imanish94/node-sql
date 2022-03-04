var mySql = require("mysql");
require('dotenv').config();

var connection = mySql.createConnection({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    database : process.env.DATABASE
});

connection.connect((function(err){
    if(err){
      console.log("error",err);
    }
    else{
      console.log("db connected..");
    }
}))

module.exports = connection