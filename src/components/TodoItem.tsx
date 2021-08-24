import React from 'react';
import styled from 'styled-components';

const TodoItem = () => {
  return (
    <TodoItemWrapper>
      <p>내용</p>
      <p>날짜</p>
    </TodoItemWrapper>
  );
};

export default TodoItem;

const TodoItemWrapper = styled.div`
  border: 1px solid black;
  margin-bottom: 10px;
`;
