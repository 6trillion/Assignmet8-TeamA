import React from 'react';
import { Modal } from 'components/modal';
import TaskForm from './TaskForm';

interface TodoCreateProps {
  isCreate: boolean;
  open: boolean;
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
    open,
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
