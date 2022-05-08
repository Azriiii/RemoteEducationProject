const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors');
const connectDB = require('./config/db');
const app=express();
const path = require('path');

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

__dirname= path.resolve();

if (process.env.NODE_ENV=== 'production'){
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res)=>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  ) 
  
} else{
  app.get('/', ()=>{
    res.send("API is running...")
  })
}


// load all routes

const authRouter = require('./routes/auth.route');
const userRouter = require('./routes/user.route');
const routerCours = require('./routes/cour.route');
const routerJobs = require('./routes/jobs.route');
const routerEvents = require('./routes/event.route');
const categoryRouter = require('./routes/category.route');
//const bodyparser = require('body-parser');



//use routes
app.use('/api/',authRouter);
app.use('/api/',categoryRouter);
app.use('/api', userRouter)
app.use('/api', routerCours)
app.use('/api', routerJobs)
app.use('/api', routerEvents)
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
