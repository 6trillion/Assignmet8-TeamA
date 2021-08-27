import React, { FC } from 'react';
import Clock from './Clock';
import Login from 'components/common/Login';
import styled from 'styled-components';
import FilterInput from 'components/filter/FilterInput';

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
display:flex;
margin:4px 10px;
justify-content:space-between;`

export default Header;
