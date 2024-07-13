import request from 'superagent'
import { Book, BookData, UpdatedBook } from '../../models/books'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const rootUrl = '/api/v1/books/'

export async function fetchBooks(): Promise<Book[]> {
  const res = await request.get(rootUrl)
  return res.body
}

export async function addBook(book: string, pages: number, author: string) {
  console.log('API:', book)

  const newBook: Book = {
    title: book,
    completed: false,
    author: author,
    pages: pages,
  }
  await request.post(rootUrl).send(newBook)
}

export async function updateBook({ id, completed }: UpdatedBook) {
  await request.patch(`${rootUrl}${id}`).send({ completed })
}

export default function useDeleteBooks() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (id: number) => {
      await request.delete(`${rootUrl}${id}`)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['book'] })
    },
  })
}
