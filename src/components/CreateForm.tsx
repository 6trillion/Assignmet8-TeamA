import React from 'react';
import styled from 'styled-components';

const CreateForm = () => {
  return (
    <CreateFormWrapper>
      <form>
        <label htmlFor="todo"> 내용 : </label>
        <input id="Todo" type="text" placeholder="To do" />

        <label htmlFor="date"> 날짜 : </label>
        <input id="date" type="text" placeholder="To do" />
      </form>
    </CreateFormWrapper>
  );
};

export default CreateForm;

const CreateFormWrapper = styled.div`
  border: 1px solid black;
`;
