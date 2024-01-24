import { useQuery } from "@tanstack/react-query"
import axios from "axios"

interface Todos {
    userId: number,
    id: number,
    title: string,
    completed: boolean
  }



function TodoList() {

    const fetchTodos = () => 
        axios
        .get <Todos[]>('https://jsonplaceholder.typicode.com/todos')
        .then((res) => (res.data))

    const {data: todos, isLoading, error} = useQuery({
        queryKey: ['todos'],
        queryFn: fetchTodos
    })
    
    return (
    <>  
        {isLoading && <p>Loading...</p>}
        {error && <p>{`${error.name}: ${error.message}`}</p>}
        <ul className="list-group mt-4">
            {todos?.map((item: Todos) => <li className="list-group-item" key={item.id}>{item.title}</li>)}
        </ul>
    </>
    )
}

export default TodoList