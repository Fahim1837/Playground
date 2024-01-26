import { useContext } from "react";
import TaskContext from "../contexts/task-context";


function TaskList() {
  const {tasks, dispatch} = useContext(TaskContext)
  return (
    <>
      <button
        className="btn btn-primary m-4"
        onClick={() => 
        dispatch({type:'ADD', tasks: {id:Date.now(), title: `Task: ${tasks.length + 1}`}})}
      >
        Add Task
      </button>
      <ul className="list-group mx-4">
        {tasks.map((item) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={item.id}
          >
            {item.title}
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({type: 'DELETE', taskID: item.id})}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TaskList;
