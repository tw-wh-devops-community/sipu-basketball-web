import React from 'react';
import { Button, Form, Input } from 'antd';
import { EyeFilled } from '@ant-design/icons';
import { AxiosBasicCredentials } from 'axios';

interface LoginFormProps {
  onFinish(values: AxiosBasicCredentials): void
}

const Username = () => (
  <Form.Item
    name="username"
    rules={[{ required: true, message: '请输入用户名!' }]}
  >
    <Input size="large" placeholder="用户名" />
  </Form.Item>
);

const Password = () => (
  <Form.Item
    name="password"
    rules={[{ required: true, message: '请输入密码' }]}
  >
    <Input.Password
      size="large"
      type="password"
      placeholder="密码"
      iconRender={(visible) => (visible ? <EyeFilled style={{ color: '#39C8C2' }} /> : <EyeFilled />)}
    />
  </Form.Item>
);

const Submit = () => (
  <Form.Item>
    <Button size="large" type="primary" block htmlType="submit" className="login-form-button">
      登录
    </Button>
  </Form.Item>
);

const LoginForm = ({ onFinish }: LoginFormProps) => (
  <div className="login-index-main">
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Username />
      <Password />
      <Submit />
    </Form>
  </div>
);
export default LoginForm;
