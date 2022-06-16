import express from "express";
import bodyParser from "body-parser";
import userRoutes from './../../routes/users.js';
import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

const app=express();
const PORT=5000;


const db=admin.firestore();

app.use(bodyParser.json());
app.use('/users',userRoutes);
app.get('/',(req,res)=>{
    console.log("TEST");
    res.send("welcome to home page");
});
app.listen(PORT,()=>console.log("server is on "+PORT+""));





admin.initializeApp(functions.config().firebase);





















