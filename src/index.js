// require('dotenv').config({path:'./env'});

import dotenv from "dotenv";

import connectDB from "./db/dbConnect.js";

dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT||8000,()=>{
        console.log(`Server is running at port:${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MONGO DB connection failed!!!",err);
})













////// Pollutes the index page with database connection and express routings///
/*

import { Express } from "express";
const app=Express();

// iffi used to immidiately innvoke functions
(async()=>{
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("Error:",error)
        throw error
       })

       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.env.PORT}`);
       })
        
    } catch (error) {
        console.error("ERROR",error)
        throw err
        
    }
})()
*/