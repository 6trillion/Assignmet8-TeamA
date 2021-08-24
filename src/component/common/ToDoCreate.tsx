import React, { useState } from 'react';
import { initStar } from 'utils/constants';
import { Modal } from 'component/modal';
import { Itodo } from 'utils/todoService';
import Stars from './Stars';

interface TodoCreateProps {
  userName: string;
  nextId: number;
  createTodo: (todo: Itodo) => void;
  increamentNextId: () => void;
}

const ToDoCreate = (props: TodoCreateProps) => {
  const { userName } = props;
  const { nextId, createTodo, increamentNextId } = props;
  const [stars, setStars] = useState(initStar);
  const [starIndex, setStarIndex] = useState(0);
  const [inputTask, setInputTask] = useState('');
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((open) => !open);
  };

  const onCreate = () => {
    handleToggle();
  };

  const onChange = (e: any) => {
    setInputTask(e.target.value);
  };

  const handleSave = () => {
    handleToggle();
    const todos: Itodo = {
      id: nextId,
      taskName: inputTask,
      status: 'NOT_STARTED',
      importance: starIndex,
      writer: userName ? userName : 'anonymous',
      createAt: new Date(),
      updateAt: new Date(),
    };

    createTodo(todos);
    increamentNextId();
    setInputTask('');
    setStars(initStar);
  };

  const handleCancle = () => {
    handleToggle();
  };
  const onSubmit = () => {};

  return (
    <>
      <button onClick={onCreate}>+</button>
      <Modal open={open}>
        <form onSubmit={onSubmit}>
          <label htmlFor="taskName">할 일</label>
          <input
            onChange={onChange}
            type="text"
            placeholder="할 일을 적어주세요"
            name="taskName"
            value={inputTask}
          />
          <Stars
            stars={stars}
            setStars={setStars}
            setStarIndex={setStarIndex}
          />
          <button onClick={handleSave}>저장</button>
          <button onClick={handleCancle}>취소</button>
        </form>
      </Modal>
    </>
  );
};

export default ToDoCreate;
