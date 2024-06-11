import request from 'superagent'
import { Book, BookData, UpdatedBook } from '../../models/books'

const rootUrl = '/api/v1/books/'

export async function fetchBooks(): Promise<Book[]> {
  const res = await request.get(rootUrl)
  return res.body
}

export async function addBook(book: string) {
  console.log('API:', book)

  const newBook: Book = {
    title: book,
    completed: false,
  }
  await request.post(rootUrl).send(newBook)
}

export async function updateBook({ id, completed }: UpdatedBook) {
  await request.patch(`${rootUrl}${id}`).send({ completed })
}
