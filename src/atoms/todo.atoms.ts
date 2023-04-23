import { atom } from "recoil";
export interface Todo{
  id: string;
  text: string;
  isCompleted: boolean;
}
const todoListState = atom({
    key: 'TodoList',
    default: [] as Todo[],
  });


  export {
    todoListState
  }