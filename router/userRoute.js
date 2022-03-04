const express = require("express");
const userRoute = express.Router();
var user = require('../controller/user');
var bodyParser = require("body-parser");
var urlencodeParser = bodyParser.urlencoded({extended:false});
userRoute.use(bodyParser.json());
var multer = require("multer");

var storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,'public/')
    },
    filename : function(req,file,cb){
        let name = Date.now()+'-'+file.originalname
        cb(null,name);
    }
})

// const upload = multer({ dest: 'public/' }) // single file upload and destination include

const upload = multer({ storage : storage }) //if change file upload names

userRoute.get("/list",user.getUser);
userRoute.post("/add",user.addUser);
userRoute.get("/list/:id",user.infoUser);
userRoute.put("/list/:id",user.updateUser);
userRoute.delete("/list/:id",user.deleteUser);
userRoute.post("/profile",upload.single('profile_pic'),user.profile); //for single file uplaod
// userRoute.post("/profile",upload.array('profile_pic'),user.profile);// for multiple file upload

module.exports = userRoute;