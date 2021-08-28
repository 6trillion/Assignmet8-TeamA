import React, { useState } from 'react';
import { tagStates } from 'utils/constants';
import StateArea from 'components/body/StateArea';
import Header from 'components/header/Header';
import { TodosContextProvider } from 'contexts/Todo/TodoStore';
import { layouts as S } from 'styles/layouts';

const App = () => {
  const [userName, setUserName] = useState('');
  return (
    <TodosContextProvider>
      <S.Wrap>
        <S.Header>
          <Header userName={userName} setUserName={setUserName} />
        </S.Header>
        <S.Body>
          <S.Main>
            {tagStates.map((v) => (
              <S.Section key={v}>
                <StateArea tagName={v} userName={userName} />
              </S.Section>
            ))}
          </S.Main>
        </S.Body>
      </S.Wrap>
    </TodosContextProvider>
  );
};

export default App;
