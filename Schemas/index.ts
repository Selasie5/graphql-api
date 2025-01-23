import graphql, { GraphQLSchema,GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } from "graphql"
import { UserType } from "./TypeDefs/UserType"
import * as UserData from "../MOCK_DATA.json"


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
export const schema =  new GraphQLSchema({query:RootQuery ,mutation:Mutation})