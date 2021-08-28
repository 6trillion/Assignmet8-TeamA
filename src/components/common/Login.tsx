import React, { useEffect, useState } from 'react';
import { getUserId, setUserId, logOutUser } from 'utils/localStorage';
import styled from 'styled-components';

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
    <LoginWrapper>
      {isLogin ? (
        <>
          <LoginedName>{userName}</LoginedName> <button onClick={onLogOut}>로그아웃</button>
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
    </LoginWrapper>
  );
};

const LoginWrapper = styled.div`
  width: 30%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  button {
    height: 30px;
    border-radius: 10px;
    background-color: rgba(0,0,0,0.3);
    color: #FFFFFF;
    &:hover {
      background-color: #4B5489;
      cursor: pointer;
    }
  }
`;

const LoginedName = styled.span`
  margin-right: 15px;
`;
    

const LoginControl = styled.form`
  white-space: nowrap;
  input {
    height: 30px;
    padding: 0 12px;
    border-radius: 10px 0 0 10px;
    background-color: rgba(255,255,255,0.5);
    border:none;
      &:focus {
        outline: 0;
        border: 1px solid #4B5489;
    }
  }
  button {
    height: 30px;
    border-radius: 0 10px 10px 0;
    background-color: rgba(0,0,0,0.3);
    color: #FFFFFF;
    &:hover {
      background-color: #4B5489;
      cursor: pointer;
    }
  }
`;


export default Login;
