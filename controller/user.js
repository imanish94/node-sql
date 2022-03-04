const User = require('./../module/user')

var getUser = (req,res)=>{
    User.listAllUser(function(error,result){       
        if(error){
            res.send(error);
        }
        res.json(result)
    })
}

var addUser = (req,res)=>{
    let data = new User(req.body);
    User.createUser(data,function(error,result){       
        if(error){
            res.send(error);
        }
        res.json(result)
    })
} 

 var infoUser = (req,res)=>{
    let { id } = req.params;
    User.listByIdUser(id,function(error,result){       
        if(error){
            res.send(error);
        }
        res.json(result)
    })
}

var updateUser = (req,res)=>{
    let { id } = req.params;
    let data = new User(req.body);
    User.updatedUser(data,id,function(error,result){       
        if(error){
            res.send(error);
        }
        res.json(result)
    })
}

var deleteUser = (req,res)=>{
    let { id } = req.params;
    User.deletedUser(id,function(error,result){       
        if(error){
            res.send(error);
        }
        res.json(result)
    })
}

var profile = (req,res)=>{  
    //console.log(req.file);//for single file
    // console.log(req.files);// for multiple files
    res.json({message: "uploaded"});
}

module.exports = {
    addUser,
    getUser,
    infoUser,
    updateUser,
    deleteUser,
    profile
}