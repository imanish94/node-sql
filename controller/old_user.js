const connection = require("./../db/connection")

var getUser = (req,res)=>{
    let sqlQuery = "select * from user";
   connection.query(sqlQuery,function(error,result,field){
       if(error) throw error;
       res.status(200).json(result);
   })
}

// var addUser = (req,res)=>{
//    connection.query("Insert INTO user set ?",[req.body],function(error,result,field){
//        if(error) throw error;
//        res.status(200).json({
//            message : "insert user",
//            result : result,
//        })
//    })
// } 

var addUser = (req,res)=>{
    let {name,email,status,gender} = req.body;
    let sqlQuery = "Insert INTO user set name=?,email=?,status=?,gender=?";
    connection.query(sqlQuery,[name,email,status,gender],function(error,result,field){
        if(error) throw error;
        res.status(200).json({
            message : "insert user",
            result : result.insertId,
        })
    })
 } 

 var infoUser = (req,res)=>{
    let { id } = req.params;
    let sqlQuery = "select * from user where id = ?";
   connection.query(sqlQuery,[id],function(error,result,field){
       if(error) throw error;
       res.status(200).json(result);
   })
}


var updateUser = (req,res)=>{
    let { id } = req.params;
    let {name,email,status,gender} = req.body; 
    let sqlQuery = "UPDATE user set name=?,email=?,status=?,gender=? where id = ?";
    connection.query(sqlQuery,[name,email,status,gender,id],function(error,result,field){
        if(error) throw error;
        res.status(200).json({
            message : `${id} update successfully..`
        })
    })
}

var deleteUser = (req,res)=>{
    let { id } = req.params;
    let sqlQuery = "Delete from user where id = ?";
   connection.query(sqlQuery,[id],function(error,result,field){
       if(error) throw error;
       res.status(200).json({
           message : `user deleted sucessfully...`
       });
   })
}


module.exports = {
    addUser,
    getUser,
    infoUser,
    updateUser,
    deleteUser
}