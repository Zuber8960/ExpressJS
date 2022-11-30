
const http = require('http');

const express= require('express');

const app = express();

app.use((req ,res, next) =>{
    console.log('Hi there');
    next();//Alow the request to continue to the next middleware to the next middleware in line.
})

app.use((req ,res, next) =>{
    console.log('Hello there');
    res.send('<h1> Hello from Express js!</h1>');
    // res.send( { 'key1': 'value' });

})

// const server = http.createServer(app);

// server.listen(5000);

app.listen(5000);




