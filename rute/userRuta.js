import express from "express"
import { createUser,getUser,loginUser } from "../kontroleri/userC.js";
import { verifyToken } from "../autentifikacija/auth.js";

let rout = express.Router();

rout.route('/users').get(verifyToken).get(getUser);

rout.route('/users/login').post(loginUser);

rout.route('/users/create').post(createUser);

export default rout;
