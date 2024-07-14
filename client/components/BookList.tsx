import { Book } from '../../models/books'
import EditBookForm from './EditBookForm'

interface BookListprops {
  books: Book[]
}

export default function BookList({ books }: BookListprops) {
  return (
    <>
      <div>
        <h2 className="mybook">My Books</h2>
      </div>
      <ul>
        {books.map((book: Book) => (
          <li key={book.id} className="bookslist">
            <h3>{book.title}</h3>
            <p>By {book.author}</p>
            <p className="page">{book.pages} Pages</p>
            <EditBookForm id={book.id} completed={book.completed} />
            <p className="name">Recommended by {book.name}</p>
            {/* <p>Compeleted? {book.completed}</p> */}
          </li>
        ))}
      </ul>
    </>
  )
}
