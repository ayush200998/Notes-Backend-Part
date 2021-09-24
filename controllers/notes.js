import notes from '../models/notes.js'
import mongoose from 'mongoose'

export const createPost = async(req, res) => {
    const note = req.body
    const newNote = new notes({ title: note.title, body: note.body })
    
    try {
        newNote.save()
        res.status(201).json(newNote)

    } catch (error) {
        res.status(500).json({message: error.message})        
    }
}

export const getNotes = async(req, res) => {
    try {
        const notesData = await notes.find()

        res.status(200).json(notesData)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const updateNote = async(req, res) => {
    const { id } = req.params
    const note  = req.body

    if(!mongoose.Types.ObjectId.isValid(id))
    res.status(404).send('No posts Found.')
    try {
        // Update the note
        const updatedNote = await notes.findByIdAndUpdate(id, note, { new: true })
        res.status(200).json(updatedNote)

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteNote = async(req, res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id))
    res.status(404).send('No posts Found.')
    try {
        await notes.findByIdAndDelete(id)

        res.json({message: "Post successfully deleted."})

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}