import React, { useState } from 'react';
import { layouts as S } from 'styles/layouts';
import StateArea from 'components/StateArea';
import Header from 'components/Header';
import { tagStates } from 'utils/constants';
import { TodosContextProvider } from 'contexts/Todo/TodoStore';
import FilterInput from 'components/filter/FilterInput';

const App = () => {
  const [userName, setUserName] = useState('');
  return (
    <TodosContextProvider>
      <S.Wrap>
        <S.Header>
          <Header userName={userName} setUserName={setUserName} />
          
          <FilterInput />
        </S.Header>
        
        <S.Main>
          {tagStates.map((v) => (
            <S.Section key={v}>
              <StateArea tagName={v} userName={userName} />
            </S.Section>
          ))}
        </S.Main>
      </S.Wrap>
    </TodosContextProvider>
  );
};

export default App;
