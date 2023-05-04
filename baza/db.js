import mongoose from "mongoose";
import "dotenv/config"

let connection = async function(){
    try{
        await mongoose.connect(process.env.CONN_STR);
        console.log("Baza konektovana");
    }catch(err){
        console.log(err);
    }
}

export default connection;