import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { UpdatedBook } from '../../models/books'
import useDeleteBooks, { updateBook } from '../apis/apiClient'
import React from 'react'

interface Props {
  id: number | undefined
  completed: boolean
}

function EditBookForm(props: Props) {
  const queryClient = useQueryClient()

  const editBookMutation = useMutation({
    mutationFn: ({ id, completed }: UpdatedBook) =>
      updateBook({ id, completed }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] })
    },
  })
  const deleteBooks = useDeleteBooks()

  const [isDone, setIsDone] = useState(false)
  const [del, setDel] = useState()

  useEffect(() => {
    setIsDone(props.completed)
  }, [props.completed])

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const booleanValue = event.target.value === '1'

    // const booleanValue = Boolean(event.target.value)
    setIsDone(booleanValue)

    // Call mutation function immediately after changing the value
    editBookMutation.mutate({ id: props.id, completed: booleanValue })

    console.log(booleanValue)
  }

  function handleDelete() {
    const id = Number(props.id)
    const password = window.prompt('Please enter admin password')
    const correctPassword = 'mybooks'
    if (password === correctPassword) {
      deleteBooks.mutate(id, {
        onSuccess: () => {
          window.location.reload()
        },
      })

      console.log(id)
    } else {
      alert('Your password is not correct')
    }
  }

  return (
    // <form onSubmit={(e) => handleSubmit(e)}>
    <form className="form">
      <label>
        <h4>Must read?</h4>
        <select
          className="drop"
          onChange={(e) => handleChange(e)}
          defaultValue={props.completed ? '1' : '0'}
        >
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </label>
      <br></br>
      <button className="deleteBtn" type="button" onClick={handleDelete}>
        Delete
      </button>
    </form>
  )
}
export default EditBookForm
