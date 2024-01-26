import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient, { Todos } from "../services/todo-services";

const useTodoForm = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: apiClient.postAll,
    onMutate: (newTodo: Todos) => {
      const prevTodos = queryClient.getQueryData<Todos>(["todos"]);
      queryClient.setQueryData<Todos[]>(["todos"], (todo = []) => [newTodo,...todo]);
      return { prevTodos };
    },

    // onSuccess: (savedTodo, newTodo) => {
    //   queryClient.setQueryData<Todos[]>(["todos"], (todos) =>
    //     todos?.map((item) => (item === newTodo ? savedTodo : item)),
    //   );
    // },

    // onError: (error, newTodo, context) => {
    //   if (!context) return;
    //   queryClient.setQueryData(["todos"], context.prevTodos);
    // },
  });
};

export default useTodoForm;
