export interface Task {
    id: number;
    title: string;
  }

interface AddTask {
    type: 'ADD'
    tasks: Task
}

interface DeleteTask {
    type: 'DELETE'
    taskID: number
}

export type ActionTask = AddTask | DeleteTask

const taskReducer = (tasks: Task[], action: ActionTask) => {
    switch (action.type) {
        case 'ADD':
            return [action.tasks, ...tasks]
        case 'DELETE':
            return tasks.filter((del) => del.id !== action.taskID)
    }
}

export default taskReducer