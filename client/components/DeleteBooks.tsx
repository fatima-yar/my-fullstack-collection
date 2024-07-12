import { useMutation, useQueryClient } from '@tanstack/react-query'

import request from 'superagent'

export default function useDeleteBook(id: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      await request.delete(`/api/v1/books/${id}`)
    },
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['books'] })
    },
  })
}
