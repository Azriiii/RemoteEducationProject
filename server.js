const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors');
const connectDB = require('./config/db');
const app=express();


//config.env to  ./config/config.env
require('dotenv').config({
    path: './config/config.env'
})

//conect db
connectDB();



app.use(bodyParser.json())

//config for only devlopement
if(process.env.NODE_ENV === 'development'){
    app.use(cors({
        origin: process.env.CLIENT_URL
    }))
    app.use(morgan('dev'))
    //morgan give information about each request
    //cors it's allow to deal with react for localhost at port 3000 without any problem
}


// load all routes

const authRouter = require('./routes/auth.route');
const userRouter = require('./routes/user.route')

//const bodyparser = require('body-parser');



//use routes
app.use('/api/',authRouter);
app.use('/api', userRouter)

app.use((req,res,next) => {
    res.status(404).json({
        success:false,
        message: "Page not founded"
    })
});



const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`App listening on port ${PORT}!`);
});