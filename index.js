import express from 'express'
import mongoose  from 'mongoose'
import cors from 'cors'
import notesRoutes from './routes/notes.js'
import dotenv from 'dotenv'


const app = express()
dotenv.config()

app.use(express.json())
app.use(cors())
app.use('/notes', notesRoutes)

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("Welcome to Notes API.")
})

mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on Port ${PORT}`)))
    .catch((error) => console.log(error.message))