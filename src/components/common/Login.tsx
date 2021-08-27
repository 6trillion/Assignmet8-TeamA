import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getUserId, setUserId, logOutUser } from 'utils/localStorage';

interface LoginProps {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
}

const Login = (props: LoginProps) => {
  const [isLogin, setIsLogin] = useState(false);
  const { userName, setUserName } = props;

  useEffect(() => {
    const userId = getUserId();
    setUserName(userId);
    if (userId) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [setUserName]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (userName) {
      setIsLogin(true);
      setUserId(userName);
    }
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const onLogOut = () => {
    setIsLogin(false);
    logOutUser();
    setUserName('');
  };

  return (
    <LoginContainer>
      {isLogin ? (
        <>
          <span>{userName}</span> <button onClick={onLogOut}>로그아웃</button>
        </>
      ) : (
        <LoginControl onSubmit={onSubmit}>
          <input
            type="text"
            name="username"
            placeholder="이름을 입력해주세요"
            value={userName || ''}
            onChange={onChange}
          />
          <button>로그인</button>
        </LoginControl>
      )}
    </LoginContainer>
  );
};
const LoginContainer = styled.div`
`
const LoginControl = styled.form`
input{
  margin-right:5px;
  &:focus{
    outline:none;
  }
}
button{
  border-radius:4px;
  &:hover{
    background-color:aqua;
    cursor:pointer;
  }
}
`

export default Login;
