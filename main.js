
const express= require('express');
const bodyParser = require('body-parser');

const app = express();

const massageRouter = require("./routes/massage");
const loginRouter = require('./routes/login');

app.use(bodyParser.urlencoded({extended : false}));

app.use(loginRouter);

app.use(massageRouter);

app.use((req, res, next)=>{
    res.status(404).send('<h1>Error 404 : Page not found !</h1>')
})


app.listen(5000);







