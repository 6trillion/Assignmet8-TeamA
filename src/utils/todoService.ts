import React, { useState, useEffect } from 'react';
import { Status } from 'utils/constants';
import {
  getTodoStorage,
  saveTodoStorage,
  removeTodoStorage,
} from 'utils/localStorage';

export type Itodo = {
  id: number;
  taskName: string;
  status: Status;
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

  const saveData = () => {
    console.log(todoState);
    saveTodoStorage(todoState);
  };

  return {
    todoState,
    nextIdState,
    increamentNextId,
    removeTodo,
    createTodo,
  };
};
