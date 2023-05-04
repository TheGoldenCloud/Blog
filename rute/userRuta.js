import express from "express"
import { createUser } from "../kontroleri/userC.js";

let rout = express.Router();

rout.route('/users').post(createUser);



export default rout;
