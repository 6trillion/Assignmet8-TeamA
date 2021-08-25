import React, { useState } from 'react';
import styled from 'styled-components';
import Stars from './Stars';

interface TaskFormProps {
  stars: boolean[];
  setStars: (star: boolean[]) => void;
  setStarIndex: (starIndex: number) => void;
  handleSave: (e: any) => void;
  setIsOpen: (open: boolean) => void;
  inputTask: string;
  setInputTask: (inputTask: string) => void;
}

const TaskForm = (props: TaskFormProps) => {
  const {
    stars,
    setStars,
    setStarIndex,
    handleSave,
    setIsOpen,
    inputTask,
    setInputTask,
  } = props;

  const onChange = (e: any) => {
    setInputTask(e.target.value);
  };

  return (
    <TodoCreateForm onSubmit={handleSave}>
      <label htmlFor="taskName">할 일</label>
      <input
        onChange={onChange}
        type="text"
        placeholder="할 일을 적어주세요"
        name="taskName"
        value={inputTask || ''}
      />
      <Stars stars={stars} setStars={setStars} setStarIndex={setStarIndex} />
      <button onClick={handleSave}>저장</button>
      <button onClick={() => setIsOpen(false)}>취소</button>
    </TodoCreateForm>
  );
};

const TodoCreateForm = styled.form`
  border: 1px solid black;
`;
export default TaskForm;
