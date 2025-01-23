//Create type defintition for user
import graphql, { GraphQLSchema,GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } from "graphql"

export const UserType=  new GraphQLObjectType(
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