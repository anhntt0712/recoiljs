import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Todo, todoListState } from "../atoms/todo.atoms";

function TodoItem({ todo }: { todo: Todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(todo.text);

  const [todos, setTodos] = useRecoilState(todoListState);

  const handleRemove = () => {
    const newTodos = todos.filter((i) => i.id !== todo.id);
    setTodos(newTodos);
  };

  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const newTodos = todos.map((i: Todo) =>
      i.id === todo.id ? { ...i, text: task } : i
    );
    setTodos(newTodos);
    toggleFrom();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTask(e.target.value);
  };

  const toggleCompleted = () => {
    const newTodos = todos.map((i: Todo) =>
      i.id === todo.id ? { ...i, isCompleted: !i.isCompleted } : i
    );
    setTodos(newTodos);
  };

  let result;
  if (isEditing) {
    result = (
      <div className="Todo">
        <form className="Todo-edit-form" onSubmit={handleUpdate}>
          <input onChange={handleChange} value={task} type="text" />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="Todo">
        <li
          id={todo.id}
          onClick={toggleCompleted}
          className={todo.isCompleted ? "Todo-task completed" : "Todo-task"}
        >
          {todo.text}
        </li>
        <div className="Todo-buttons">
          <button onClick={toggleFrom}>
            <i className="fas fa-pen" />
          </button>
          <button onClick={handleRemove}>
            <i id={todo.id} className="fas fa-trash" />
          </button>
        </div>
      </div>
    );
  }
  return result;
}

export default TodoItem;
