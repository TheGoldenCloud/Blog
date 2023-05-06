import jwt from "jsonwebtoken";
import "dotenv/config";
import asyncHandler from "express-async-handler";
import userModel from "../modeli/user.js";

let verifyToken = asyncHandler (async (req, res, next) => {
    let token;
    let oathHeader = req.headers.authorization
    if(req.body == undefined){
        res.status(401).json({
            message: "Niste ulogovani"
        })
    }else{

        // let user = await userModel.findOne(req.body   
        if(oathHeader && oathHeader.startsWith("Bearer")){
            token = oathHeader.split(" ")[1];
            jwt.verify(token,process.env.JWT_SECRET,(err,user) => {
                if(err) {
                    res.status(401);
                }else{
                    req.user = user;
                    //console.log(user);
                    next();
                }
            });

        }
    }

})

let isAdmin = asyncHandler (async (req, res, next) =>{


})

export { verifyToken }