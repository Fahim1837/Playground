import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/todo-services";


const useTodos = () => {
  
  return useQuery({
    queryKey: ["todos"],
    queryFn: apiClient.getAll,
  });
};

export default useTodos;
