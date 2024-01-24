import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Todos {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }

const useTodos = () => {
    const fetchTodos = () => 
        axios
        .get <Todos[]>('https://jsonplaceholder.typicode.com/todos')
        .then((res) => (res.data))

    return useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodos,
    })
}

export default useTodos