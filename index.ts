import express from "express";
import * as UserData from "./MOCK_DATA.json"
import { Request, Response } from "express";
import graphql, { GraphQLSchema,GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } from "graphql"
import { graphqlHTTP } from "express-graphql";

const app = express();

app.use(express.json())

//Create type defintition for user
const UserType=  new GraphQLObjectType(
    {
        name: "user",
        fields: ()=>({
            id:{type:GraphQLInt},
            firstName:{type:GraphQLString},
            lastName:{type:GraphQLString},
            email:{type:GraphQLString},
            password:{type:GraphQLString},
        })
    }
)

//Implement the root query for getting all users
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields:{
       getAllUsers:{
        type: new GraphQLList(UserType),
        args:{

        },
        resolve:(parent,args)=> {
            return UserData
        }
       }
    }
})

//Implement a mutation for the 
const Mutation = new GraphQLObjectType({
    name:"Mutation",
    fields:{
        createUser: {
            type: UserType,
            args: {
                firstName: {type: GraphQLString},
                lastName: {type: GraphQLString},
                email: {type: GraphQLString},
                password: {type: GraphQLString},
                
            },
            resolve:(parent, args)=>
            {
                UserData.push({
                    id:UserData.length +1,
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email:args.email,
                    password:args.password
                })
                return args
            }
        }
    }
})
const schema =  new GraphQLSchema({query:RootQuery ,mutation:Mutation})

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