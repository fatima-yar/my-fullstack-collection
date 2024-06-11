import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { useState, FormEvent, ChangeEvent } from 'react'
import { Book, BookData, UpdatedBook } from '../../models/books'
import { fetchBooks, updateBook } from '../apis/apiClient'
import React from 'react'
import { getAllBooks } from '../../server/db/db'
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

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const booleanValue = Boolean(event.target.value)
    setIsDone(booleanValue)
    console.log(booleanValue)
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    console.log(props.id)
    event.preventDefault()
    editBookMutation.mutate({ id: props.id, completed: isDone })
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>
        Completed Yet?
        <select
          onChange={(e) => handleChange(e)}
          defaultValue={props.completed ? 'No' : 'Yes'}
        >
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  )
}
export default EditBookForm
//drop down forms
//boolean forms
//update boolean  updated state
//use state

// function DropdownList() {
// const [isDone, setIsDone] = useState(false)
// const { data: Book } = useQuery({
//   queryKey = ['books'],
//   queryFn: () => fetchBooks(),
// })

//   const quesryClient= useQueryClient()
//   const bookMutation=useMutation({
//     mutationFn: updateBook,
//     quesryClient.inva
//   })

//  const handleSubmit = (event: FormEvent)=>{
//   event.preventDefault()
//   setIsDone(true)
//   onSubmit(isDone)
//  }

//   return(
// <form onSubmit={handleSubmit}>
//           <label>
//             Completed Yet?
//             <select>
//               <option value="1">Yes</option>
//               <option value="0">No</option>
//             </select>
//           </label>
// </form>
//   )
// }
