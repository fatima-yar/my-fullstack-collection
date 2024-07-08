import { useState } from 'react'
import { addBook } from '../apis/apiClient'
import { useMutation, useQueryClient } from '@tanstack/react-query'

// eslint-disable-next-line no-unused-vars
function AddBook() {
  const queryClient = useQueryClient()

  const addBookMutation = useMutation({
    mutationFn: (title: string) => addBook(title),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['books'],
      })
    },
  })

  const [form, setForm] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setForm(event.target.value)

    // console.log(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // console.log(form)
    addBookMutation.mutate(form)
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Add New Book: </label>

        <input
          onChange={(e) => handleChange(e)}
          id="title"
          name="title"
          className="new-book"
          aria-label="input new book"
          placeholder="What is your new book"
          value={form}
          style={{ height: '40px' }} // Adjust the height value as needed
        />

        <button>Submit</button>
      </form>
    </>
  )
}

export default AddBook
