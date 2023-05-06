import express from "express"
import { createPost,getPost } from "../kontroleri/postC.js";
import { verifyToken } from "../autentifikacija/auth.js";

let rout = express.Router();

rout.route('/postovi').get(getPost)  //Vrati post

// rout.route('/users/login').post(loginUser);

rout.route('/postovi/create').post(verifyToken).post(createPost);

export default rout;
