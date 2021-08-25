import React, { useState } from 'react';
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
  stars: boolean[];
  setStars: any;
  setStarIndex: (starIndex: number) => void;
  handleSave: any;
  handleCancel: any;
  inputTask: string;
  setInputTask: any;
}

const ToDoCreate = (props: TodoCreateProps) => {
  const {
    isCreate,
    userName,
    open,
    status,
    nextId,
    createTodo,
    increamentNextId,
    setIsOpen,
    stars,
    setStars,
    setStarIndex,
    handleSave,
    handleCancel,
    inputTask,
    setInputTask,
  } = props;

  return (
    <Modal open={open}>
      <TaskForm
        isCreate={isCreate}
        stars={stars}
        setStars={setStars}
        setStarIndex={setStarIndex}
        handleSave={handleSave}
        handleCancel={handleCancel}
        inputTask={inputTask}
        setInputTask={setInputTask}
      />
    </Modal>
  );
};

export default ToDoCreate;
