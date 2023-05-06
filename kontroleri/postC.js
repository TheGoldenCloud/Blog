import "dotenv/config";
import asyncHandler from "express-async-handler"
import postModel from "../modeli/post.js"
import userModel from "../modeli/user.js"
import jwt from "jsonwebtoken";

//DODATI ERRORE

// //Varaca usera
let getPost = asyncHandler(async (req,res)=>{   //Get users
    
    
    res.json(req.body);


})

//Pravi post
let createPost = asyncHandler(async (req,res)=>{
    
    //Ne ovo
    let user = await userModel.findOne(req.body.user);  //NEVALJAAAAA

    if(user.role == "Admin" || user.role == "Moderator"){
        let post = await postModel.create({
            title: req.body.title,
            author: req.body.author,
            body: req.body.body,
            datum: req.body.datum,
            likes: req.body.likes,
        })
        
        res.status(200).json({
            message: "Post napravljen"
        })
    }else if(user.role == "Guest"){
        res.send("Guest nemoze da kreira postove")
    }

    
})

export { createPost,getPost }