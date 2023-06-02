import express from "express";
import dotenv from 'dotenv';
import connectDb from "./Database/Db.js";
import router from "./Routes/Router.js";
import bodyParser from "body-parser";


const app = express();
dotenv.config({path : './Config/.env'});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true}));
connectDb();

app.listen(process.env.Port, (err) => {
    if (err){
        console.log(err);
    }
    console.log(`server is running on ${process.env.Port}`);
})

app.use('/', router);