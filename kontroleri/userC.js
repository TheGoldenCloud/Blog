import "dotenv/config";
import asyncHandler from "express-async-handler"
import userModel from "../modeli/user.js"
import jwt from "jsonwebtoken";

//DODATI ERRORE

//Proverava da li user postoji i da kreira token
let loginUser = asyncHandler(async (req,res) =>{
    let { username, password } = req.body;

    let user = await userModel.findOne({ username: username, password: password });
    
    if(!user){
        console.log(user);
        res.status(400).json({ message: "User not found"});
    }else{
        let accT = jwt.sign({    
            user:{
                username: user.username,
                password: user.password
            }
        },process.env.JWT_SECRET,{ expiresIn: "10m"});
        res.status(200).json(accT); 
    }

});

// let verifyToken = asyncHandler (async (req, res, next) => {
//     let token;
//     let oathHeader = req.headers.authorization
//     if(oathHeader == undefined){
//         res.status(401).json({
//             message: "Niste ulogovani"
//         })
//     }else{
//         if(oathHeader && oathHeader.startsWith("Bearer")){
//             token = oathHeader.split(" ")[1];
//             jwt.verify(token,process.env.JWT_TOKEN,(err,user) => {
//                 if(err) {
//                     res.status(401);
//                 }else{
//                     req.body = user;
//                     next();
//                 }
//             });
//         }
//     }

// })

//Varaca usera
let getUser = asyncHandler(async (req,res)=>{   //Get users
    res.status(200).json(req.body);

    console.log(req.body);
})

//Pravi usera
let createUser = asyncHandler(async (req,res)=>{
    let user = await userModel.create({
        name: req.body.name,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    })
    
    res.status(200).json({
        message: "User napravljen"
    })
})




export { createUser,loginUser,getUser }