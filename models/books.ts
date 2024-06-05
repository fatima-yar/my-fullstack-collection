export interface Book {
  id?: number
  title: string
  author?: string
  pages?: number
  compeleted: boolean
}

export type BookData = Omit<Book, 'id'>
