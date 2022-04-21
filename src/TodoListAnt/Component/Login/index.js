import { Form, Input, Button, Spin, Result } from 'antd';
import { action } from '../../redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import LocalUser from '../../LocalUser';
import { Link, useHistory } from 'react-router-dom';

export default function Signin() {

  const history = useHistory();

  const dispatch = useDispatch();

  const [spinning, setSpinning] = useState(false);


const onFinish = (values) => {
    setSpinning(true);
    dispatch(action.login(values))
      .then(() => {
        setSpinning(false);
        if(LocalUser.getUser())
          history.push('/');
      })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

    return (
        <>
        {LocalUser.getUser() ? (
          <Result
          status="403"
          title="403"
          subTitle="Sorry, you are not authorized to access this page."
          extra={<Link to={'/'}><Button type="primary">Back Home</Button></Link>}
        />
        ) : (
          <Spin tip="loading..." size='large' spinning={spinning}>
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
          label="Account"
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
          label="Pass word"
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
          wrapperCol={{
            offset: 10,
            span: 14,
          }}
        >
          <Button className='rounded-lg px-5' type="primary" htmlType="submit">
            Đăng Nhập
          </Button>
        </Form.Item>
      </Form>
          </Spin>
        )}
        </>
    )
}