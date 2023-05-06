import "dotenv/config";
import express from 'express';
import bodyParser from 'body-parser';
import conntion from './baza/db.js'

import userRuta from './rute/userRuta.js'
import postRuta from './rute/postRuta.js'

const app = express();
conntion()

app.use(bodyParser.json())

app.use(userRuta);
app.use(postRuta);

app.listen(process.env.PORT,()=>{
    console.log("Server startovan na portu 4000");
})

