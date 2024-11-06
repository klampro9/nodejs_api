const express = require('express')
const dotenv = require('dotenv').config()
const errorHandler = require('./midleware/errorHandler')
const connectDb = require('./config/dbConnection')
connectDb()
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json());

app.use('/api/contacts', require('./routes/contactsRoutes'))
app.use('/api/users', require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})