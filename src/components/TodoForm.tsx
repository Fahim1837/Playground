import { useMutation, useQueryClient } from "@tanstack/react-query"
import { FormEvent, useRef } from "react"
import apiClient from "../services/api-services"
import { Todos } from "../hooks/useTodos"

function TodoForm() {
    const inputRef = useRef <HTMLInputElement>(null)
    
    function handleSubmit (e:FormEvent){
        e.preventDefault()

        if (inputRef.current && inputRef.current.value)
        mutate({
            id: 0,
            userId: 1,
            title: inputRef.current.value,
            completed: false,
        })
    }
    const queryClient = useQueryClient ()

    const addTodo = (todo: Todos) => 
        apiClient
            .post <Todos>('/todos', todo)
            .then((res) => res.data)

    const {mutate} =useMutation ({
        mutationFn: addTodo,
        onSuccess: (savedTodo) => {
            queryClient.setQueryData <Todos[]>(['todos'], (todo) => [savedTodo, ...(todo || [])] )
        }
    })
  return (
    <form className="row my-3" onSubmit={(e) =>handleSubmit (e)}>
        <div className="col">
        <input type="text" ref={inputRef}
        onChange={() => console.dir(inputRef.current)}
        className="form-control" />
        </div>
        <div className="col">
        <button className="btn btn-primary">Add</button>
        </div>
    </form>
  )
}

export default TodoForm