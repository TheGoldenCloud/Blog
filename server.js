import express from 'express';
import "dotenv/config";

import bodyParser from 'body-parser';

const app = express();


app.use(bodyParser.json())


app.listen(process.env.PORT,()=>{
    console.log("Server startovan na portu 4000");
})