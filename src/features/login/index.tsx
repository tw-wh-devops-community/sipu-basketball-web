import React from 'react';
import { Spin } from 'antd';
import { AxiosBasicCredentials } from 'axios';
import Logo from './logo';
import LoginForm from './login-form';
import { useAuthorizeActions, useHandleLoginStateChange } from './hooks';
import './index.less';
import { useTypedSelector } from '../../app/hooks/useTypedSelector';
import { selectLoginState } from './authorizeSlice';

const Login: React.FC = () => {
  useHandleLoginStateChange();
  const { doLogin } = useAuthorizeActions();
  const { isLogin, loading } = useTypedSelector(selectLoginState);

  const onFinish = (values: AxiosBasicCredentials) => {
    doLogin(values);
  };

  return (
    <Spin spinning={!isLogin && loading}>
      <div className="login-layout">
        <Logo />
        <LoginForm onFinish={onFinish} />
      </div>
    </Spin>
  );
};
export default Login;
