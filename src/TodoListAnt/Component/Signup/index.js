import { Form, Input, Button, Spin, Result } from 'antd';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import server from '../../server';
import LocalUser from '../../LocalUser';

export default function Login() {

    const history = useHistory(); 
    const [spinning, setSpinning] = useState(false);

    const onFinish = (values) => {
      setSpinning(true);
        server.setUser(values)
          .then(res => {
            history.push('/todoLishPreminium/login');
            setSpinning(false);
          })
          .catch(err => {
            console.log(err);
          })
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };


    return (
        <>
        {!LocalUser.getUser() ? (
          <Spin size='large' tip='Sign up...' spinning={spinning}>
          <Form
          className='w-full'
          layout='vertical'
        name="basic"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Full name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Name account"
          name="account"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
            {
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                message: 'please type your correct email'
            }
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 14,
          }}
        >
          <Button className='rounded-lg px-5' type="primary" htmlType="submit">
            Đăng kí
          </Button>
        </Form.Item>
      </Form>
          </Spin>
        ) : (
          <Result
            status="403"
            title="403"
            subTitle="Sorry, you are not authorized to access this page."
            extra={<Link to='/todoLishPreminium'><Button type="primary">Back Home</Button></Link>}
          />
        )}
        </>
    )
}