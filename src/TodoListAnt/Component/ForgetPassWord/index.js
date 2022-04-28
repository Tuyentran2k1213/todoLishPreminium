import { Form, Input, Button, Spin, Result } from 'antd';
import { action } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import LocalUser from '../../LocalUser';
import { Link } from 'react-router-dom';

export default function Signin() {

  const dispatch = useDispatch();
  const { spinner } = useSelector(state => state.taskReducer);


const onFinish = (values) => {
    dispatch(action.changePassSaga({
      email: values.email,
      Password: values.Password,
    }));
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
          extra={<Link to={'/todoLishPreminium/main'}><Button type="primary">Back Home</Button></Link>}
        />
        ) : (
          <>
          <h1 className='text-center text-rose-400 text-3xl'>Change your password</h1>
          <Spin tip="loading..." size='large' spinning={spinner}>
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
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email here!',
            },
            {
              pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: 'type your correct email here !'
            }
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
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
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
          </>
        )}
        </>
    )
}