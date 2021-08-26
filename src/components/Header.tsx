import React, { FC } from 'react';
import Login from 'components/common/Login';

interface HeaderProps {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const Header: FC<HeaderProps> = ({ userName, setUserName }) => {
  return <Login userName={userName} setUserName={setUserName} />;
};

export default Header;
