import { Dispatch } from "react"
import { ActionTask, Task } from "../reducers/task-reducer"
import React from "react"

interface TaskContextType {
    tasks: Task []
    dispatch: Dispatch <ActionTask>
}

const TaskContext =  React.createContext <TaskContextType> ({} as TaskContextType) 

export  default TaskContext