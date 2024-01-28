//require('dotenv').config({path:'./env'})   //inconsistency

import dotenv from "dotenv"
import connectDB  from "./db/index.js";   //Code/src/db' is not supported resolving ES modules imported issue resolution
import app from "./app.js";

dotenv.config({
    path:'./env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000 , ()=>{
        console.log(`Server is running at PORT : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGODB connection failed !!! ", err)
})




//1st approach
/*
import express from "express";

const app = express();

( async ()=>{

    try {
        mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",()=>{
            console.log("ERR: ", error);
            throw error;
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`APP is listening on port ${Process.env.PORT}`);
        })
        
    } catch (error) {
        console.error("ERR : ",error);
        throw error;
        
    }
} )()  //IIFE semicolon used here for cleaning purposes
*/