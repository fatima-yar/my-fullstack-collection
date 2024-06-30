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
        <label htmlFor="title">New Todo: </label>
        input
        <input
          onChange={(e) => handleChange(e)}
          id="title"
          name="title"
          className="new-todo"
          aria-label="input new todo"
          placeholder="What needs to be done?"
          value={form}
        />
        <button>Submit</button>
      </form>
    </>
  )
}

export default AddBook
