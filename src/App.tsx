import React, { useState } from 'react';
import { layouts as S } from 'styles/layouts';
import StateArea from 'components/StateArea';
import Header from 'components/Header';
import { tagStates } from 'utils/constants';
import { useTodo } from 'utils/todoService';

import {TodosContextProvider, useTodosState} from 'contexts/Todo/Store'
import TodoList from 'components/TodoList';
import TodoForm from 'components/TodoForm';

const App = () => {
  const { todoState, nextIdState, increamentNextId, removeTodo, createTodo } =
    useTodo();
  const [userName, setUserName] = useState('');
  return (
    <>
    <TodosContextProvider>
      {/* child */}
      <TodoForm/>
      <TodoList/>
    </TodosContextProvider>
    
      <S.Wrap>
        <S.Header>
          <Header userName={userName} setUserName={setUserName} />
        </S.Header>
        <S.Main>
          {tagStates.map((v) => (
            <S.Section key={v}>
              <StateArea
                tagName={v}
                userName={userName}
                nextId={nextIdState}
                createTodo={createTodo}
                increamentNextId={increamentNextId}
                removeTodo={removeTodo}
                todoState={todoState}
              />
            </S.Section>
          ))}
        </S.Main>
      </S.Wrap>
      </>
  );
};

export default App;
