import express from "express"
import "dotenv/config";
import rwClient from "./twitterCliet.js";
import { Cronjob } from "cron"

const app = express()
const PORT = 4000



app.listen(PORT, ()=>{
    console.log(`server is running http://localhost:${PORT}`);
})