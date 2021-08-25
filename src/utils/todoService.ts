import React, { useState, useEffect } from 'react';
import {
  getTodoStorage,
  saveTodoStorage,
  removeTodoStorage,
} from 'utils/localStorage';

export type Itodo = {
  id: number;
  taskName: string;
  status: string;
  importance: boolean[];
  writer: string;
  createAt: Date;
  updateAt: Date;
};

let initialTodos: Itodo[] = [];
let nextIdState: number = 0;

export const useTodo = () => {
  const [todoState, setTodoState] = useState(initialTodos);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [todoState]);

  const increamentNextId = () => {
    nextIdState = nextIdState + 1;
  };

  const removeTodo = (id: number) => {
    removeTodoStorage(id);
    setTodoState((prevState) =>
      prevState.filter((todo: Itodo) => todo.id !== id),
    );
  };

  const createTodo = (todo: Itodo) => {
    const nextId = nextIdState + 1;
    setTodoState((prevState) => prevState.concat({ ...todo, id: nextId }));
  };

  const loadData = () => {
    let initialTodos = getTodoStorage() || '[]';
    if (initialTodos && initialTodos.length >= 1) {
      nextIdState = initialTodos[initialTodos.length - 1].id;
    }
    setTodoState(initialTodos);
  };

  const updateToDo = (todo: Itodo) => {
    // 수정 후 순서가 안바뀌는 코드
    const index = todoState.findIndex((item) => item.id === todo.id);
    let newTodoList = [...todoState];
    newTodoList.splice(index, 1, todo);

    // 수정 후 순서가 바뀌는 코드
    //const filterdTodoList = todoState.filter((item) => item.id !== todo.id);
    //const newTodoList = [todo, ...filterdTodoList];

    setTodoState(newTodoList);
  };

  const saveData = () => {
    saveTodoStorage(todoState);
  };

  return {
    todoState,
    nextIdState,
    increamentNextId,
    removeTodo,
    createTodo,
    updateToDo,
  };
};
