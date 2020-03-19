const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');
const schema = buildSchema(`
    type Query {
        hello: String
        getaccount(username:String): Account
    }
    type Account {
        name: String
        gender: String
        salary(city: String): Int
    }
`)

const root = {
    hello: () => {
        return 'hello world'
    },
    getaccount: ({username}) => {
        const name =  username;
        const salary = ({city})=>{
            if (city ==="台北") return 35000
            return 25000
        };
        const age = 18;
        const gender = '男'
        return {
            name, salary, gender, age
        }
    }

}

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));

app.listen(4000);