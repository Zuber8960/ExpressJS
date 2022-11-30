
const express= require('express');

const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

app.use('/add-product',(req, res, next) => {
    console.log('the "add product" page!');
    res.send(`<body><form action="/product" method="POST"><input type="text" name="title"><input type="text" name="title"><button type="submit">Add Product</button></form></body>`)
})

app.use('/product',(req, res, next) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/about',(req ,res, next) =>{
    console.log('about page');
    res.send('<h1>This is a about page!</h1>')
})

app.use('/',(req ,res, next) =>{
    res.send('<h1>Hello from Express!</h1>')
})




app.listen(5000);




