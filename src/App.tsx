import { useReducer } from "react";
import taskReducer from "./state-management/reducers/task-reducer";
import HomePage from "./state-management/components/HomePage";
import NavBar from "./state-management/components/NavBar";
import TaskContext from "./state-management/contexts/task-context";
import loginReducer from "./state-management/reducers/auth-reducer";
import AuthContext from "./state-management/contexts/auth-context";
function App() {
  const [tasks, taskDispatch] = useReducer (taskReducer, [])
  const [user, authDispatch ] = useReducer (loginReducer, '')

  return (
    <AuthContext.Provider value={{user, dispatch: authDispatch}}>
    <TaskContext.Provider value={{tasks, dispatch: taskDispatch}}>
      <NavBar/>
      <HomePage/>
    </TaskContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;
