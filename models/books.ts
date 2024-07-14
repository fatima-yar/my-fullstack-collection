export interface Book {
  [x: string]: unknown
  id?: number
  title: string
  author: string
  pages: number
  completed: boolean
  name: string
}
export interface UpdatedBook {
  id: number | undefined
  completed: boolean
}
export type BookData = Omit<Book, 'id'>
