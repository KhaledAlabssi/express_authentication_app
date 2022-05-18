import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 5000
import connectDB from './config/db.js'
import colors from 'colors'

// connect to database
connectDB() 

import { errorHandler } from './middleware/errorMiddleware.js'
import userRoutes from './routes/userRoutes.js'

const app = express()
app.use(express.json())
app.use(express.urlencoded())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Welcome to Froex App'})
})

app.use('/api/users', userRoutes)

app.use(errorHandler)


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
