import React, { useState } from 'react';
import {
  useTodosState,
  useTodosDispatch,
  increamentNextId,
  nextIdState,
  Todo,
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
  const [starIndex, setStarIndex] = useState(0);
  const [inputTask, setInputTask] = useState('');
  const [editId, setEditId] = useState(-1);

  const onCreate = () => {
    setIsOpen(false);
    const todo: Todo = {
      id: nextIdState,
      taskName: inputTask,
      status: tagName,
      importance: starIndex,
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
    setStarIndex(0);
  };

  const onUpdate = (todo: Todo) => {
    const updateTodo: Todo = {
      id: todo.id,
      taskName: inputTask,
      status: tagName,
      importance: starIndex,
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
    setStarIndex(0);
  };

  const handleSave = (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
    isCreate: boolean,
    todo: Todo,
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
        setStarIndex={setStarIndex}
        inputTask={inputTask}
        setInputTask={setInputTask}
        handleSave={handleSave}
        handleCancel={handleCancel}
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
