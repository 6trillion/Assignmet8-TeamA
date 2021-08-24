import React, { useEffect, useState } from 'react';
import { getUserId, setUserId, logOutUser } from 'utils/localStorage';

interface LoginProps {
  userName: string;
  setUserName: any;
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
  }, []);

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
