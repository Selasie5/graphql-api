import express from "express";
import { Request, Response } from "express";
import { schema } from "./Schemas";
import { graphqlHTTP } from "express-graphql";

const app = express();

app.use(express.json())





app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}))


app.get("/", (req:Request, res:Response)=>
{
    res.send("Trying out something in relation to graphql")
})

app.listen(3000,()=>
{
    console.log("🎉✅ Server is running on PORT 3000")
})