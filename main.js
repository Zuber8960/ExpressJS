
const express= require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');

app.use(bodyParser.urlencoded({extended : false}));

app.use('/admin',adminRouter);

app.use(shopRouter);

app.use((req, res, next)=>{
    res.status(404).send('<h1>Error 404 : Page not found !</h1>')
})


app.listen(5000);




