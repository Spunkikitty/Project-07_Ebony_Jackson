//MongoDB Connection:mongodb+srv://Curious:<password>@cluster0.ywfmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
//MongoPass: PPAQlL0yhbtV37vC


//keeps nodemon from crashing//
process.on('uncaughtException', (error, origin) => {
  console.log('----- Uncaught exception -----')
  console.log(error)
  console.log('----- Exception origin -----')
  console.log(origin)
})

process.on('unhandledRejection', (reason, promise) => {
  console.log('----- Unhandled Rejection at -----')
  console.log(promise)
  console.log('----- Reason -----')
  console.log(reason)
})

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const path = require('path');

//import routes
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const sauceRoutes = require('./routes/sauce');



const app = express();

//Connect the API to the MONGODB cluster
mongoose.connect('mongodb+srv://Curious:PPAQlL0yhbtV37vC@cluster0.ywfmh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

)

.then(() => {
    console.log('Successfully connected to MongoDB Atlas!');


})
.catch((error) => {
  console.log('Unable to connect to MongoDB Atlas!');
  console.error(error);
});

//MIDDLEWARE  allows all requests from all origins to access the api
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


// parsing the incoming request bodies (replace body-parser)
app.use(bodyParser.json());

//serving static resource images 
app.use('/images', express.static(path.join(__dirname, 'images')));
//using routes, setting the endpoint 
app.use('/api/sauces', sauceRoutes)
app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
  
module.exports = app;