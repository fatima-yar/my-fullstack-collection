import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState, useEffect } from 'react'
import { UpdatedBook } from '../../models/books'
import { updateBook } from '../apis/apiClient'
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

  const [isDone, setIsDone] = useState(false)

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

  return (
    // <form onSubmit={(e) => handleSubmit(e)}>
    <form>
      <label>
        Completed Yet?
        <select
          className="drop"
          onChange={(e) => handleChange(e)}
          defaultValue={props.completed ? '1' : '0'}
        >
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </label>
      {/* <button type="submit">Submit</button> */}
    </form>
  )
}
export default EditBookForm
