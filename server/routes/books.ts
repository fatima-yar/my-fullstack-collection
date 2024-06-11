import * as db from '../db/db.ts'
import { Router } from 'express'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const books = await db.getAllBooks()
    res.json(books)
  } catch (error) {
    console.error(`database error: ${error}`)
    res.sendStatus(500)
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const book = await db.getBooksById(id)
    res.json(book)
  } catch (error) {
    console.error(`database error: ${error}`)
    res.sendStatus(500)
  }
})

router.post('/', async (req, res) => {
  try {
    const newBook = req.body
    await db.createBook(newBook)
    res.sendStatus(201)
  } catch (error) {
    console.error(`database error: ${error}`)
    res.sendStatus(500)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await db.deleteBooks(id)
  } catch (error) {
    console.error(`database error: ${error}`)
    res.sendStatus(500)
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)

    const updatedBook = req.body
    console.log(updatedBook)
    await db.updateBook(id, updatedBook)
    res.sendStatus(200)
  } catch (error) {
    console.error(`database error: ${error}`)
    res.sendStatus(500)
  }
})
export default router
