import { useReducer } from "react";
import taskReducer from "./state-management/reducers/task-reducer";
import HomePage from "./state-management/components/HomePage";
import NavBar from "./state-management/components/NavBar";
import TaskContext from "./state-management/contexts/task-context";
import AuthProviders from "./state-management/providers/AuthProviders";

function App() {
  const [tasks, dispatch] = useReducer (taskReducer, [])

  return (
    <AuthProviders>
    <TaskContext.Provider value={{tasks, dispatch}}>
      <NavBar/>
      <HomePage/>
    </TaskContext.Provider>
    </AuthProviders>
  );
}

export default App;
