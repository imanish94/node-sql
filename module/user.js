const connection = require("./../db/connection");

var User = function(user){
    this.name = user.name;
    this.email = user.email;
    this.status = user.status;
    this.gender = user.gender;
    this.created_at = new Date();
}

User.createUser =(data,callback)=>{
    let sqlQuery = "Insert INTO user set ?";
    connection.query(sqlQuery,[data],function(error,result,field){
        if(error) {
            callback(null,error)
        }
        callback(null,{
            message : "insert user",
            result : result.insertId,
        })
    })
}

User.listAllUser = (callback)=>{
    let sqlQuery = "select * from user";
    connection.query(sqlQuery,function(error,result,field){
        if(error) {
            callback(null,error)
        }
        callback(null,result)
    })
}

User.listByIdUser = (id,callback)=>{
    let sqlQuery = "select * from user where id = ?";
    connection.query(sqlQuery,[id],function(error,result,field){
        if(error) {
        callback(null,error)
        }
        callback(null,result)
    })
}

User.updatedUser = (data,id,callback)=>{
    let sqlQuery = "UPDATE user set name=?,email=?,status=?,gender=? where id = ?";
    let {name,email,status,gender} = data;
    connection.query(sqlQuery,[name,email,status,gender,id],function(error,result,field){
        if(error) {
            callback(null,error)
        }
        callback(null,{
            message : `${id} update successfully..`
        })
    })
}

User.deletedUser = (id,callback)=>{
    let sqlQuery = "Delete from user where id = ?";
    connection.query(sqlQuery,[id],function(error,result,field){
        if(error) {
        callback(null,error)
        }
        callback(null,{
            message : `user deleted sucessfully...`
        })
    })
}

module.exports = User;