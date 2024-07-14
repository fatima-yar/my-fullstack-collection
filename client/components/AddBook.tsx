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
    name: string
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
      return addBook(props.title, props.pages, props.author, props.name)
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
  const [name, setName] = useState('')

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
  function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)

    // console.log(event.target.value)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log(form)
    addBookMutation.mutate({
      title: form,
      pages: parseInt(pages),
      author: author,
      name: name,
    })
    setForm('')
    setPages('')
    setAuthor('')
    setName('')
  }
  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="title">
          <h3 className="titleName">Add A New Book:</h3>{' '}
        </label>

        <input
          onChange={(e) => handleChange(e)}
          id="title"
          name="title"
          className="new-book"
          aria-label="input new book"
          placeholder="What is the book title?"
          value={form}
          style={{
            width: '100%',
            maxWidth: '400px',
            height: '40px',
            boxSizing: 'border-box',
          }}
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
          style={{
            width: '100%',
            maxWidth: '400px',
            height: '40px',
            boxSizing: 'border-box',
          }}
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
          style={{
            width: '100%',
            maxWidth: '400px',
            height: '40px',
            boxSizing: 'border-box',
          }}
          type="number"
        />
        <br></br>
        <input
          onChange={(e) => handleChangeName(e)}
          id="name"
          name="name"
          className="new-book"
          aria-label="input name"
          placeholder="Please enter your name"
          value={name}
          style={{
            width: '100%',
            maxWidth: '400px',
            height: '40px',
            boxSizing: 'border-box',
          }}
        />
        <br></br>
        <input className="button" type="submit" value="Submit" />
      </form>
    </>
  )
}

export default AddBook
