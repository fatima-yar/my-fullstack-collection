import { Book } from '../../models/books'
import EditBookForm from './EditBookForm'

interface BookListprops {
  books: Book[]
}

export default function BookList({ books }: BookListprops) {
  return (
    <>
      <div>
        <h2>My Books</h2>
      </div>
      <ul>
        {books.map((book: Book) => (
          <li key={book.id}>
            <h3>Title: {book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Pages: {book.pages}</p>
            <EditBookForm id={book.id} completed={book.completed} />
            <p>Compeleted? {book.completed}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
