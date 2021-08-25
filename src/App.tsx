import React, { useState } from 'react';
import { layouts as S } from 'styles/layouts';
import StateArea from 'components/StateArea';
import Header from 'components/Header';
import { tagStates } from 'utils/constants';
import { useTodo } from 'utils/todoService';

const App = () => {
  const {
    todoState,
    nextIdState,
    increamentNextId,
    removeTodo,
    createTodo,
    updateToDo,
  } = useTodo();
  const [userName, setUserName] = useState('');

  return (
    <>
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
                updateToDo={updateToDo}
              />
            </S.Section>
          ))}
        </S.Main>
      </S.Wrap>
    </>
  );
};

export default App;
