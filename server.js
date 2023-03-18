const express = require('express')
const bookRoutes = require('./routes/bookRoutes')
const adminRoutes = require('./routes/adminRoutes')
const connectDB = require('./config/db')
const dotenv = require('dotenv')

const app = express()
app.use(express.json())
dotenv.config()

connectDB()

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.use('/api/books', bookRoutes)
app.use('/api/admins', adminRoutes)

PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
