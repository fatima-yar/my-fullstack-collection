import { Book, BookData } from '../../models/books'
import connection from './connection'

export function getAllBooks(): Promise<Book[]> {
  return connection('books').select()
}

export function getBooksById(id: number): Promise<Book> {
  return connection('books').where({ id }).first()
}

export function createBook(newBook: BookData) {
  return connection('books').insert(newBook)
}

export function deleteBooks(id: number) {
  return connection('books').where({ id }).delete()
}

export function updateBook(id: number, completed: boolean) {
  return connection('books').where({ id }).update(completed)
}
