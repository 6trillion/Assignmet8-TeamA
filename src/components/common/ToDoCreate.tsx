import React, { useState } from 'react';
import { initStar } from 'utils/constants';
import { Modal } from 'components/modal';
import { Itodo } from 'utils/todoService';
import TaskForm from './TaskForm';

interface TodoCreateProps {
  isCreate: boolean;
  status: string;
  userName: string;
  nextId: number;
  open: boolean;
  createTodo: (todo: Itodo) => void;
  increamentNextId: () => void;
  setIsOpen: (e: any) => void;
}

const ToDoCreate = (props: TodoCreateProps) => {
  const { userName } = props;
  const {
    isCreate,
    open,
    status,
    nextId,
    createTodo,
    increamentNextId,
    setIsOpen,
  } = props;
  const [stars, setStars] = useState(initStar);
  const [starIndex, setStarIndex] = useState(0);
  const [inputTask, setInputTask] = useState('');

  const onCreate = () => {
    setIsOpen(false);
    const todos: Itodo = {
      id: nextId,
      taskName: inputTask,
      status: status,
      importance: stars,
      writer: userName ? userName : 'anonymous',
      createAt: new Date(),
      updateAt: new Date(),
    };

    createTodo(todos);
    increamentNextId();
    setInputTask('');
    setStars(initStar);
    setStarIndex(0);
  };

  const onUpdate = () => {};

  const handleSave = () => {
    if (isCreate === true) {
      onCreate();
    } else {
      onUpdate();
    }
  };

  return (
    <Modal open={open}>
      <TaskForm
        stars={stars}
        setStars={setStars}
        setStarIndex={setStarIndex}
        handleSave={handleSave}
        setIsOpen={setIsOpen}
        inputTask={inputTask}
        setInputTask={setInputTask}
      />
    </Modal>
  );
};

export default ToDoCreate;
