import useTodos from "../hooks/useTodos";

function TodoList() {
  const { data: todos, isLoading, error } = useTodos();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{`${error.name}: ${error.message}`}</p>}
      <ul className="list-group mt-4">
        {todos?.map((item) => (
          <li className="list-group-item" key={item.id}>
            {item.title}
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
