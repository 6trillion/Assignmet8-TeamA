import React, { useState } from 'react';
import { Itodo } from 'utils/todoService';
import { initStar } from 'utils/constants';
import {
  useTodosState,
  useTodosDispatch,
  increamentNextId,
  nextIdState,
} from 'contexts/Todo/TodoStore';

import ToDoCreate from 'components/common/ToDoCreate';
import ToDoItem from './ToDoItem';
import TaskForm from 'components/common/TaskForm';

interface TodoListProps {
  tagName: string;
  userName: string;
  open: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TodoList = (props: TodoListProps) => {
  const { tagName, userName, open, setIsOpen } = props;
  const todos = useTodosState();
  const dispatch = useTodosDispatch();

  const [edit, setEdit] = useState(false);
  const [stars, setStars] = useState(initStar);
  const [starIndex, setStarIndex] = useState(0);
  const [inputTask, setInputTask] = useState('');
  const [editId, setEditId] = useState(-1);

  const onCreate = () => {
    setIsOpen(false);
    const todo: Itodo = {
      id: nextIdState,
      taskName: inputTask,
      status: tagName,
      importance: stars,
      writer: userName ? userName : 'anonymous',
      createAt: new Date(),
      updateAt: new Date(),
    };
    dispatch({
      type: 'CREATE',
      createTodo: todo,
    });
    increamentNextId();
    setInputTask('');
    setStars(initStar);
    setStarIndex(0);
  };

  const onUpdate = (todo: Itodo) => {
    const updateTodo: Itodo = {
      id: todo.id,
      taskName: inputTask,
      status: tagName,
      importance: stars,
      writer: userName,
      createAt: todo.createAt,
      updateAt: new Date(),
    };
    dispatch({
      type: 'UPDATE',
      updateTodo: updateTodo,
    });
    setEdit(false);
    setInputTask('');
    setStars(initStar);
    setStarIndex(0);
  };

  const handleSave = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
    isCreate: boolean,
    todo: Itodo,
  ) => {
    e.preventDefault();
    isCreate ? onCreate() : onUpdate(todo);
  };

  const handleCancel = (isCreate: boolean) => {
    isCreate ? setIsOpen(false) : setEdit(false);
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
              <ToDoItem key={todo.id} todo={todo} handleEdit={handleEdit} />
            ),
          )}
    </>
  );
};

export default React.memo(TodoList);
