// access .env file
require('dotenv').config()

// import express lib
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoute')
const errorMiddleware = require('./middleware/errorMiddleware')
const cors = require('cors')



// create express object
const app = express()

// get secrets from .env  
const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT || 3000
const FRONTEND = process.env.FRONTEND

// middleware to connect frontend : allow domains or ip's in the list
const corsOptins = {
    origin: FRONTEND,
    optionSuccessStatus: 200 
}
app.use(cors(corsOptins))

// middleware for app to understand json
app.use(express.json())

// middleware to use url in posting data
app.use(express.urlencoded({extended: false}))

app.use('/api/products', productRoute)


// to access the app we declare routes to the app : the route has a callback function
// route root
app.get('/', (req, res) => {
    res.send('Hellow Node API')
})



app.get('/blog', (req, res) => {
    res.send('Welcome to my blog')
})
 

app.use(errorMiddleware);

// Use of a Promise
// connection to mongodb : using the then() method as a callback registration implementing a Promise : use secret from .env
mongoose.connect(MONGO_URL).then(() => {

    // create server to listen at port 3000 and a callback function
    app.listen(PORT, () => {
    console.log(`Node api app is running on port ${PORT}!`)
});
    console.log('Connected to MongoDB....')

    }
).catch((error) => {
    console.log(error)
})
