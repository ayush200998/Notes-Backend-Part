import mongoose from 'mongoose'

const notesSchema = mongoose.Schema({
    title: String,
    body: String,
})

const notes = mongoose.model('notes', notesSchema)

export default notes