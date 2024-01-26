import HomePage from "./state-management/components/HomePage";
import NavBar from "./state-management/components/NavBar";
import AuthProviders from "./state-management/providers/AuthProviders";
import TaskProvider from "./state-management/providers/TaskProvider";

function App() {

  return (
    <AuthProviders>
      <TaskProvider>
        <NavBar/>
        <HomePage/>
      </TaskProvider>
    </AuthProviders>
  );
}

export default App;
