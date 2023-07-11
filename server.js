
// import express lib
const express = require('express')

// create express object
const app = express()


// to access the app we declare routes to the app : the route has a callback function
// route root
app.get('/', (req, res)=>{
    res.send('Hellow Node API')
})

// create server to listen at port 3000 and a callback function
app.listen(3000, ()=>{
    console.log('Node api app is running on port 3000!')
})
