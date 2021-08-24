import React, { FC, useCallback } from 'react';
import styled from 'styled-components';

interface TodoItemProps {
  id?: string;
  setIsDragging: (e: any) => any;
}

// const TodoItem = forwardRef<HTMLDivElement, TodoItemProps>((props, ref) => {
const TodoItem: FC<TodoItemProps> = ({ id, setIsDragging }) => {
  const handleStargDrag = useCallback(() => {
    setIsDragging(true);
  }, [setIsDragging]);

  const handleEndDrag = useCallback(() => {
    setIsDragging(false);
  }, [setIsDragging]);

  return (
    <TodoItemWrapper
      draggable="true"
      onDragStart={handleStargDrag}
      onDragEnd={handleEndDrag}
    >
      <p>내용 {id}</p>
      <p>날짜 1</p>
    </TodoItemWrapper>
  );
};

export default TodoItem;

const TodoItemWrapper = styled.div`
  border: 1px solid black;
  margin-bottom: 10px;
  cursor: move;
`;
