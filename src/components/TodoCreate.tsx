import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { v4 as uuid } from "uuid";
import { Todo, todoListState } from "../atoms/todo.atoms";

function NewTodoForm() {
  const [inputTodo, setInputTodo] = useState<string>("");
  const setTodoList = useSetRecoilState(todoListState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputTodo(e.target.value);
    console.log(e);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newTodo = { id: uuid(), text: inputTodo, isCompleted: false };
    setTodoList((oldTodoList: Todo[]) => [...oldTodoList, newTodo]);
    setInputTodo("");
  };

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <label htmlFor="task">New todo</label>
      <input
        value={inputTodo}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="New Todo"
      />
      <button>Add Todo</button>
    </form>
  );
}

export default NewTodoForm;
