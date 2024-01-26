import { useContext } from "react";
import TaskContext from "../contexts/task-context";

const useTask = () => useContext(TaskContext)

export default useTask