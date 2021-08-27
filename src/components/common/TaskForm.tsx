import React from 'react';
import styled from 'styled-components';
import Stars from './Stars';
import { useTodosState, useTodosDispatch, Todo } from 'contexts/Todo/TodoStore';

interface TaskFormProps {
  isCreate: boolean;
  todo?: Todo;
  stars: boolean[];
  setStars: (star: boolean[]) => void;
  setStarIndex: (starIndex: number) => void;
  handleSave: (
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
    isCreate: boolean,
    todo: Todo,
  ) => void;
  handleCancel: (isCreate: boolean) => void;
  inputTask: string;
  setInputTask: (inputTask: string) => void;
}

const TaskForm = (props: TaskFormProps) => {
  const {
    todo,
    isCreate,
    stars,
    setStars,
    setStarIndex,
    handleSave,
    handleCancel,
    inputTask,
    setInputTask,
  } = props;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputTask(e.target.value);
  };

  return (
    <TodoCreateForm onSubmit={(e) => handleSave(e, isCreate, todo!)}>
      <label htmlFor="taskName">할 일</label>
      <input
        onChange={(e) => onChange(e)}
        type="text"
        placeholder="할 일을 적어주세요"
        name="taskName"
        value={inputTask || ''}
      />
      <Stars setStarIndex={setStarIndex} />
      <button onClick={(e) => handleSave(e, isCreate, todo!)}>저장</button>
      <button onClick={() => handleCancel(isCreate)}>취소</button>
    </TodoCreateForm>
  );
};

const TodoCreateForm = styled.form`
  border: 1px solid black;
  input{
    &:focus{
      outline:none;
    }
  }
`;
export default TaskForm;
