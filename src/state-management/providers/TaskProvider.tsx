import { ReactNode, useReducer } from "react"
import taskReducer from "../reducers/task-reducer"
import TaskContext from "../contexts/task-context"

interface Props {
    children: ReactNode
}

function TaskProvider({children}: Props) {
  const [tasks, dispatch] = useReducer (taskReducer, [])

  return (
    <TaskContext.Provider value={{tasks, dispatch}}>
        {children}
    </TaskContext.Provider>
  )
}

export default TaskProvider