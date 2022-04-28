import { Form, Input, Button, Spin, Result } from 'antd';
import { action } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import LocalUser from '../../LocalUser';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Signin() {

  const dispatch = useDispatch();
  const { spinner, userLog } = useSelector(state => state.taskReducer);


const onFinish = (values) => {  
  dispatch(action.loginSaga(values))
  };

  const navigate = useNavigate();
  useEffect(() => {
    if(userLog){
      navigate('/todoLishPreminium/main');
    }
  }, [userLog])

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

    return (
        <>
        <div className='w-screen h-screen flex flex-col justify-center items-center'>
        {LocalUser.getUser() ? (
          <Result
          status="403"
          title="403"
          subTitle="Sorry, you are not authorized to access this page."
          extra={<Link to={'/todoLishPreminium/main'}><Button type="primary">Back Home</Button></Link>}
        />
        ) : (
          <>
          <div className='text-5xl'>
            <h1>WELCOME! <Link to='/todoLishPreminium/main'>TODOLIST APP</Link></h1>
          </div>
          <div className='container px-96'>
              <h1 className='text-center text-3xl text-rose-400'>Login</h1>
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

        <Link to='/todoLishPreminium/forget' className='text-[#0084fe] hover:text-[#0068ca]'>Forget your password ?</Link>
  
        <Form.Item
          wrapperCol={{
            offset: 10,
            span: 14,
          }}
        >
          <Button className='rounded-lg px-5' type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
          </Spin>
          </div>
          <div className='container text-center'>
          <p>or you can</p>
          <Link to='/todoLishPreminium/main'>
          Watch demo here
          </Link>
          </div>
          </>
        )}
        </div>
        </>
    )
}