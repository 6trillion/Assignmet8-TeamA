import { Todo } from 'contexts/Todo/TodoStore';

const getLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data && JSON.parse(data);
};

const setLocalStorage = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const removeLocalStorage = (key: string) => {
  localStorage.removeItem(key);
};

export const getUserId = () => {
  return getLocalStorage('user_id');
};

export const setUserId = (value: string) => {
  setLocalStorage('user_id', value);
};

export const logOutUser = () => {
  removeLocalStorage('user_id');
};

export const getTodoStorage = () => {
  return getLocalStorage('todos');
};

export const saveTodoStorage = (todo: any) => {
  setLocalStorage('todos', todo);
};

export const removeTodoStorage = (id: number) => {
  const todos = getTodoStorage();
  const newTodos = todos.filter((todo: Todo) => todo.id !== id);
  saveTodoStorage(newTodos);
  return newTodos;
};
