import express from 'express';
import cors from "cors";
import cookieParser from 'cookie-parser';

const app = express()

app.use(cors({  //middleware we use this
    origin: process.env.CORS_ORIGIN,
    credentials:true
}))   

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({extended:true , limit: "16kb"})); //specify this configuration to node
app.use(express.static("public")); //assests images such as images , fevicon etc
app.use(cookieParser())


export { app }