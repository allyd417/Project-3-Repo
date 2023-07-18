const express = require('express');
const path = require('path');
const { graphqlHTTP } = require('express-graphql');

const mongoose= require('mongoose');
 const schema = require('./graphql/schema');
 const resolvers = require('./graphql/resolvers');

 const app = express();
 const PORT = 3001;
 
 //serve static files from public  folder 
 app.use(express.static(path.join(__dirname, '../client/build')));

 //Handle request for home page
 app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
 });

//serve static files from the css folder
app.use('/css', express.static(path.join(__dirname, '../client/src/components/css')));

 app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        rootValue: resolvers,
        graphiql: true,
    })
);

mongoose.connect('mongodb://localhost/petfinder', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.connection.once('open', () => {
    console.log('Connected to database');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})