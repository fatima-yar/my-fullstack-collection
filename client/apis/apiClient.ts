import request from 'superagent'
import { Book, BookData } from '../../models/books'

const rootUrl = '/api/v1/books/'

export async function fetchBooks(): Promise<Book[]> {
  const res = await request.get(rootUrl)
  return res.body
}

export async function addBook(book: string) {
  console.log('API:', book)

  const newBook: Book = {
    title: book,
    compeleted: false,
  }
  await request.post(rootUrl).send(newBook)
}

export async function updateBook(updatedBook: string, id: number) {
  await request.patch(`${rootUrl}${id}`).send(updatedBook)
}
