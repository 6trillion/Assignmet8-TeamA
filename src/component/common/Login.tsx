import React from 'react';
import { useEffect, useState } from 'react';
import { getUserId, setUserId, logOutUser } from '../../utils';

interface LoginProps {}

const Login = (props: any) => {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const userId = getUserId();
    setUserName(userId);
    if (userId) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [isLogin]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLogin(true);
    setUserId(userName);
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
    <div>
      {isLogin ? (
        <>
          <span>{userName}</span> <button onClick={onLogOut}>로그아웃</button>
        </>
      ) : (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="username"
            placeholder="이름을 입력해주세요"
            value={userName}
            onChange={onChange}
          />
          <button>로그인</button>
        </form>
      )}
    </div>
  );
};

export default Login;
