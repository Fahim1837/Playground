import { useContext } from "react"
import LoginStatus from "./LoginStatus"
import TaskContext from "../contexts/task-context"

function NavBar() {
    const {tasks} = useContext(TaskContext)
  return (
    <nav className="d-flex justify-between navbar">
        <span className="badge text-bg-secondary">{tasks.length}</span>
        <LoginStatus/>
    </nav>
  )
}

export default NavBar