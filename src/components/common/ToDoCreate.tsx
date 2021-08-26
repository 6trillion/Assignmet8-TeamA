import React from 'react';
import { Modal } from 'components/modal';
import TaskForm from './TaskForm';
import { Todo } from 'contexts/Todo/TodoStore';

interface TodoCreateProps {
  isCreate: boolean;
  open: boolean;
  setStarIndex: React.Dispatch<React.SetStateAction<number>>;
  handleSave: (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
    isCreate: boolean,
    todo: Todo,
  ) => void;
  handleCancel: (isCreate: boolean) => void;
  inputTask: string;
  setInputTask: React.Dispatch<React.SetStateAction<string>>;
}

const ToDoCreate = (props: TodoCreateProps) => {
  const {
    isCreate,
    open,
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
