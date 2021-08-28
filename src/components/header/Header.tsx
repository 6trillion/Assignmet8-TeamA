import React, { FC } from 'react';
import Clock from 'components/header/Clock';
import Login from 'components/common/Login';
import FilterInput from 'components/filter/FilterInput';
import styled from 'styled-components';

interface HeaderProps {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const Header: FC<HeaderProps> = ({ userName, setUserName }) => {
  return (
    <HeaderWrap>
      <Clock />
      <FilterInput />
      <Login userName={userName} setUserName={setUserName} />
    </HeaderWrap>
  );
};

const HeaderWrap = styled.div`
  display: flex;
  margin: 0 20px;
  justify-content: space-between;
`;

export default Header;
