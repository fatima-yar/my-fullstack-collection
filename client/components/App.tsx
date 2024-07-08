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
        <header>
          <div className="header">
            <h1>My Collection</h1>
            <AddBook />
            <br />
          </div>
          <BookList books={books} />
        </header>
        <section className="main">{/* add your code here */}</section>
      </>
    )
  }
}

export default App
