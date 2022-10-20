const mongoose = require('mongoose')

//const uri = 'mongodb+srv://Draigon2003:375195285465Np@cluster0.bjdufq8.mongodb.net/bootcamps-sena?retryWrites=true&w=majority'
const uri = 'mongodb://localhost:27017/bootcamps-sena'

//componente de conexion a DB
//tipo: funcional

const connectDB = async() => {
        const conn = await mongoose .connect(uri, {
            useNewUrlParser : true,
            useUnifiedTopology : true
        })

         console.log(`MongoDB Conectado: ${conn.connection.host}`)
}

connectDB()