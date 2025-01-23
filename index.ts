import express from "express";
import { Request, Response } from "express";

const app = express();

app.use(express.json())


app.get("/", (req:Request, res:Response)=>
{
    res.send("Trying out something in relation to graphql")
})

app.listen(3000,()=>
{
    console.log("🎉✅ Server is runnong on PORT 3000")
})