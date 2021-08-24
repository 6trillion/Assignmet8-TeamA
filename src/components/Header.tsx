import React, { FC } from 'react';
import Login from 'components/common/Login';

interface HeaderProps {
  userName: string;
  setUserName: (e: any) => void;
}

const Header: FC<HeaderProps> = ({ userName, setUserName }) => {
  return <Login userName={userName} setUserName={setUserName} />;
};

export default Header;
