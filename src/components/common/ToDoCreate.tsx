import React, { useState } from 'react';
import { ReactComponent as StarSvg } from './star.svg';
import { initStar } from 'utils/constants';
import { Modal } from 'components/modal';
import { Itodo } from 'utils/todoService';
import styled from 'styled-components';

interface TodoCreateProps {
  userName: string;
  nextId: number;
  open: boolean;
  createTodo: (todo: Itodo) => void;
  increamentNextId: () => void;
  setIsOpen: (e: any) => void;
}

const ToDoCreate = (props: TodoCreateProps) => {
  const { userName } = props;
  const { open, nextId, createTodo, increamentNextId, setIsOpen } = props;
  const [stars, setStars] = useState(initStar);
  const [starIndex, setStarIndex] = useState(0);
  const [inputTask, setInputTask] = useState('');

  const onChange = (e: any) => {
    setInputTask(e.target.value);
  };

  const onClick = (e: any, index: number) => {
    const newStars = stars.map((_, i): boolean => i < index);

    setStars(newStars);
    setStarIndex(index);
  };

  const handleSave = () => {
    setIsOpen(false);
    const todos: Itodo = {
      id: nextId,
      taskName: inputTask,
      status: 'NOT_STARTED',
      importance: starIndex,
      writer: userName,
      createAt: new Date(),
      updateAt: new Date(),
    };
    createTodo(todos);
    increamentNextId();
    setInputTask('');
    setStars(initStar);
  };

  const handleCancle = () => {
    setIsOpen(false);
  };
  const onSubmit = () => {};

  return (
    <>
      <Modal open={open}>
        <TodoCreateForm onSubmit={onSubmit}>
          <label htmlFor="taskName">할 일</label>
          <input
            onChange={onChange}
            type="text"
            placeholder="할 일을 적어주세요"
            name="taskName"
            value={inputTask || ''}
          />
          <label htmlFor="importance">중요도</label>
          {stars.map((item, index) => (
            <StarSvg
              key={index}
              onClick={(e) => {
                onClick(e, index + 1);
              }}
              name="importance"
              fill={item ? 'gold' : 'lightgray'}
            />
          ))}
          <button onClick={handleSave}>저장</button>
          <button onClick={handleCancle}>취소</button>
        </TodoCreateForm>
      </Modal>
    </>
  );
};

export default ToDoCreate;

const TodoCreateForm = styled.div`
  border: 1px solid black;
`;
