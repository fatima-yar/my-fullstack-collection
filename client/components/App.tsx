import AddBook from './AddBook'
import BookList from './BookList'
import { fetchBooks } from '../apis/apiClient'
import { useQuery } from '@tanstack/react-query'

function App() {
  const {
    data: books,
    isFetching,
    isError,
    error,
  } = useQuery({ queryKey: ['books'], queryFn: () => fetchBooks() })
  if (isError) {
    return error.message
  }
  if (isFetching) {
    return <p>...LOADING</p>
  }
  if (books) {
    return (
      <>
        <header className="contents">
          <div className="header">
            <h1>My Collection</h1>
            <AddBook />
            <br />
          </div>
          <div>
            <BookList books={books} />
          </div>
        </header>
        <section className="main">{/* add your code here */}</section>
      </>
    )
  }
}

export default App
