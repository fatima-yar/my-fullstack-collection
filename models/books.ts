export interface Book {
  id?: number
  title: string
  author?: string
  pages?: number
  completed: boolean
}
export interface UpdatedBook {
  id: number | undefined
  completed: boolean
}
export type BookData = Omit<Book, 'id'>
