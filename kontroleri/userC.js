import "dotenv/config";
import asyncHandler from "express-async-handler"
import userModel from "../modeli/user.js"


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


export { createUser }