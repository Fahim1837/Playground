import { useMutation, useQueryClient } from "@tanstack/react-query"
import apiClient from "../services/api-services"
import { Todos } from "./useTodos"

const useTodoForm = () => {
    const queryClient = useQueryClient ()

    const addTodo = (todo: Todos) => 
        apiClient
            .post <Todos>('/todos', todo)
            .then((res) => res.data)

    return useMutation ({
        mutationFn: addTodo,
        onSuccess: (savedTodo) => {
            queryClient.setQueryData <Todos[]>(['todos'], (todo) => [savedTodo, ...(todo || [])] )
        }
    })
}

export default useTodoForm