import React, { useState } from 'react';
import { Itodo } from 'utils/todoService';
import { initStar } from 'utils/constants';

import ToDoCreate from 'components/common/ToDoCreate';
import ToDoItem from './ToDoItem';
import TaskForm from 'components/common/TaskForm';

interface TodoListProps {
  todos: Itodo[];
  tagName: string;
  userName: string;
  nextId: number;
  createTodo: any;
  increamentNextId: any;
  open: boolean;
  setIsOpen: any;
  removeTodo: (id: number) => void;
  updateToDo: (todo: Itodo) => void;
}

const TodoList = (props: TodoListProps) => {
  const {
    todos,
    tagName,
    userName,
    nextId,
    createTodo,
    increamentNextId,
    open,
    setIsOpen,
    removeTodo,
    updateToDo,
  } = props;

  const [edit, setEdit] = useState(false);
  const [stars, setStars] = useState(initStar);
  const [starIndex, setStarIndex] = useState(0);
  const [inputTask, setInputTask] = useState('');
  const [editId, setEditId] = useState(-1);

  const onCreate = () => {
    setIsOpen(false);
    const todo: Itodo = {
      id: nextId,
      taskName: inputTask,
      status: tagName,
      importance: stars,
      writer: userName ? userName : 'anonymous',
      createAt: new Date(),
      updateAt: new Date(),
    };

    createTodo(todo);
    increamentNextId();
    setInputTask('');
    setStars(initStar);
    setStarIndex(0);
  };

  const onUpdate = (todo: Itodo) => {
    const newTodo: Itodo = {
      id: todo.id,
      taskName: inputTask,
      status: tagName,
      importance: stars,
      writer: userName,
      createAt: todo.createAt,
      updateAt: new Date(),
    };
    updateToDo(newTodo);
    setEdit(false);
    setInputTask('');
    setStars(initStar);
    setStarIndex(0);
  };

  const handleSave = (e: any, isCreate: boolean, todo: Itodo) => {
    e.preventDefault();
    if (isCreate === true) {
      onCreate();
    } else {
      onUpdate(todo);
    }
  };

  const handleCancel = (isCreate: boolean) => {
    if (isCreate === true) {
      setIsOpen(false);
    } else {
      setEdit(false);
    }
  };

  const handleEdit = (id: number) => {
    setEdit(true);
    setEditId(id);
  };

  return (
    <>
      <ToDoCreate
        isCreate={true}
        open={open}
        stars={stars}
        setStars={setStars}
        setStarIndex={setStarIndex}
        handleSave={handleSave}
        handleCancel={handleCancel}
        inputTask={inputTask}
        setInputTask={setInputTask}
      />
      {todos &&
        todos.length > 0 &&
        todos
          ?.filter((todo) => todo.status === tagName)
          .map((todo) =>
            edit && todo.id === editId ? (
              <TaskForm
                todo={todo}
                isCreate={false}
                stars={stars}
                setStars={setStars}
                setStarIndex={setStarIndex}
                handleSave={handleSave}
                handleCancel={handleCancel}
                inputTask={inputTask}
                setInputTask={setInputTask}
              />
            ) : (
              <ToDoItem
                key={todo.id}
                todo={todo}
                removeTodo={removeTodo}
                handleEdit={handleEdit}
              />
            ),
          )}
    </>
  );
};

export default React.memo(TodoList);
