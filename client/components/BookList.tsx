import { Book } from '../../models/books'

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
            <p>Compeleted? {book.compeleted}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
