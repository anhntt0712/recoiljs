import { useRecoilState, useRecoilValue } from "recoil";
import TodoCreate from "./TodoCreate";
import { todoListState } from "../atoms/todo.atoms";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  return (
    <div className="TodoList">
      <h1>
        Todo List <span>A simple React Todo List App</span>
      </h1>
      <ul>
        {todoList.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ul>
      <TodoCreate />
    </div>
  );
};

export default TodoList;
