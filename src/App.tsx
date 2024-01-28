import HomePage from "./state-management/components/HomePage";
import NavBar from "./state-management/components/NavBar";
import TaskProvider from "./state-management/providers/TaskProvider";

function App() {

  return (
    
      <TaskProvider>
        <NavBar/>
        <HomePage/>
      </TaskProvider>
  );
}

export default App;
