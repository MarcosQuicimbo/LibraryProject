'use strict'
var express=require('express');
const cors = require('cors');
var app=express();

var bodyParser=require('body-parser');
var librosRoutes=require('./routes/libros.routes');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
// Allow requests from http://localhost:4200
// app.use(cors({
//     origin: 'http://localhost:4200',
//     optionsSuccessStatus: 200
//   }));
// Allow requests from http://localhost:4200
app.use(cors({
  origin: 'http://127.0.0.1:4200',
  optionsSuccessStatus: 200
}));
// Allow the content-type header
app.options('*', cors()) // enable pre-flight request for all routes
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
//app.options('*',cors());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization', 'X-API-KEY', 'X-Request-With', 'Content-Type','Accept', 'Access-Control-Allow', 'Request-Method')
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    res.header("Access-Control-Allow-Credentials",true);
    next();
});

//rutas
/*app.get('/',(req,res)=>{
    res.status(404).send(
        "<h1>Hola, bienvenido</h1>"
    )
})*/

var sessions=require('express-session');
const cookieParser = require('cookie-parser');
const oneDay = 1000 * 60 * 60 * 24;
app.use(sessions({
    secret: "miclave12345",//como se va a cifrar la cookie 
    saveUninitialized:true, //guardo una sesión 
    cookie: {maxAge: oneDay},
    resave:false
}));
// app.post('/login', function(req, res) {
//     // set the Content-Type header
//     res.setHeader('Content-Type', 'application/json');
  
// app.use(cookieParser());
//  // send the response
//  res.send({ message: 'Success' });
// });
//se sobreescribe para tener una nueva sesión 

app.use('/',librosRoutes);
module.exports=app;