const mongoose = require('mongoose')
const env = require('dotenv')

const connectDb = async() =>{
    try {
        const connect = await mongoose.connect(process.env.Connection_String)
        console.log('Database connected',
            connect.connection.host,
            connect.connection.name
        )
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
module.exports = connectDb