import React, { useState } from 'react'
import { addBook } from '../apis/apiClient'
import { useMutation, useQueryClient } from '@tanstack/react-query'

// eslint-disable-next-line no-unused-vars
function AddBook() {
  const queryClient = useQueryClient()
  interface MutationProps {
    title: string
    author: string
    pages: number
  }

  // const addBookMutation = useMutation({
  //   mutationFn: (title: string) => addBook(title),
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({
  //       queryKey: ['books'],
  //     })
  //   },
  // })
  const addBookMutation = useMutation({
    mutationFn: async (props: MutationProps) => {
      return addBook(props.title, props.pages, props.author)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['books'],
      })
    },
  })

  const [form, setForm] = useState('')
  const [pages, setPages] = useState('')
  const [author, setAuthor] = useState('')

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setForm(event.target.value)

    // console.log(event.target.value)
  }
  function handleChangePages(event: React.ChangeEvent<HTMLInputElement>) {
    if (!isNaN(parseInt(event.target.value))) {
      setPages(event.target.value)
    }

    // console.log(event.target.value)
  }
  function handleChangeAuthor(event: React.ChangeEvent<HTMLInputElement>) {
    setAuthor(event.target.value)

    // console.log(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(form)
    addBookMutation.mutate({
      title: form,
      pages: parseInt(pages),
      author: author,
    })
    setForm('')
    setPages('')
    setAuthor('')
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">Add New Book: </label>
        <br></br>

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
        <br></br>

        <input
          onChange={(e) => handleChangeAuthor(e)}
          id="title"
          name="title"
          className="new-book"
          aria-label="input new book"
          placeholder="Who is the author?"
          value={author}
          style={{ height: '40px' }} // Adjust the height value as needed
        />

        <br></br>
        <input
          onChange={(e) => handleChangePages(e)}
          id="pages"
          name="pages"
          className="new-book"
          aria-label="input new book"
          placeholder="How many pages?"
          value={pages}
          style={{ height: '40px' }} // Adjust the height value as needed
          type="number"
        />
        <br></br>
        <input className="button" type="submit" value="Submit" />
      </form>
    </>
  )
}

export default AddBook
