import React from 'react';
import { layouts as S } from 'styles/layouts';
import StateArea from 'components/StateArea';
import Header from 'components/Header';

const App = () => {
  return (
    <>
      <S.Wrap>
        <S.Header>
          <Header />
        </S.Header>
        <S.Main>
          <S.Section>
            <StateArea>
              {/* 나중에 utils 상수로 넘길 것들 */}
              <p>To do</p>
            </StateArea>
          </S.Section>
          <S.Section>
            <StateArea>
              <p>In progress</p>
            </StateArea>
          </S.Section>
          <S.Section>
            <StateArea>
              <p>Complete</p>
            </StateArea>
          </S.Section>
        </S.Main>
      </S.Wrap>
    </>
  );
};

export default App;
