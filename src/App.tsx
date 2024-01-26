import { useReducer } from "react";
import taskReducer from "./state-management/reducers/task-reducer";
import HomePage from "./state-management/components/HomePage";
import NavBar from "./state-management/components/NavBar";
import TaskContext from "./state-management/contexts/task-context";
function App() {
  const [tasks, dispatch] = useReducer (taskReducer, [])

  return (
    <TaskContext.Provider value={{tasks, dispatch}}>
      <NavBar/>
      <HomePage/>
    </TaskContext.Provider>
  );
}

export default App;
