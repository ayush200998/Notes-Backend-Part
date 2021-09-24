import express from 'express'
import { createPost, getNotes, updateNote, deleteNote } from '../controllers/notes.js'

const router = express.Router()

router.post('/create', createPost )
router.get('/', getNotes )
router.patch('/update/:id', updateNote )
router.delete('/:id', deleteNote)

export default router