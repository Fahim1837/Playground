import { FormEvent, useRef } from "react";
import useTodoForm from "../hooks/useTodoForm";

function TodoForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (inputRef.current && inputRef.current.value)
      mutate({
        id: 0,
        userId: 1,
        title: inputRef.current.value,
        completed: false,
      });
    if (inputRef.current) inputRef.current.value = "";
  }

  const { mutate, error } = useTodoForm();

  if (error) return <div className="alert alert-danger">{error.message}</div>;

  return (
    <form className="row my-3" onSubmit={(e) => handleSubmit(e)}>
      <div className="col">
        <input type="text" ref={inputRef} className="form-control" />
      </div>
      <div className="col">
        <button className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
}

export default TodoForm;
