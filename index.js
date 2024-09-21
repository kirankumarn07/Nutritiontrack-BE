import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import AppRouter from "./router/index.js";


dotenv.config();

const PORT =  9090;

// const DB_NAME = process.env.DB_NAME;
const DB_URL ="mongodb+srv://kirankumarnaga7:Nkiran07@cluster0.gglxa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" ;

console.log(DB_URL);

mongoose.connect(`${DB_URL}`)
.then(()=>console.log('Mongodb connected successfully'))
.catch((error)=>console.log(error))

const app = express();
app.use(cors());
app.use(express.json());
app.use(AppRouter);
app.get("/", (req, res) => {
  res.send("server running");
});
app.listen(PORT, () => console.log(`App listening port ${PORT}`));
