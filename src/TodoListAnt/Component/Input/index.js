import { Form, Input, Button, DatePicker } from 'antd';
import { action } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import { PlusCircleOutlined, UploadOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import moment from 'moment';

export default function InputTask() {

  const [form] = Form.useForm()

  const { addTask, updateTask } = action;

  const dispatch = useDispatch();

  const chooseTask = useSelector(state => state.taskReducer.chooseTask);

  const [editmode, setEditMode] = useState(true);

  useEffect(() => {
    if(!!chooseTask){
      form.setFieldsValue({
        title: chooseTask.title,
        content: chooseTask.content,
        time: moment(chooseTask.time),
      });
      setEditMode(true);
    } else {
      setEditMode(false);
    }
    }, [chooseTask]);

    const onFinish = (values) => {
      if(!editmode) {
        dispatch(addTask({...values, done: false, time: values.time.format('YYYY-MM-DD HH:mm:ss')}));
      }
      if(editmode) {
        dispatch(updateTask({...values, time: values.time.format('YYYY-MM-DD HH:mm:ss')}));
      }
      form.resetFields();
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    const config = {
      rules: [
        {
          type: 'object',
          required: true,
          UTC: true,
          message: 'Please select time!',
        },
      ],
    };

    return (
        <div className='container mx-auto px-2'>
          <Form
          form={form}
      name="basic"
      labelCol={{
        span: 5,
      }}
      wrapperCol={{
        span: 15,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Task name"
        name="title"
        rules={[
          {
            required: true,
            message: 'Please input your task name',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="time" label="Time" {...config}>
        <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>

      <Form.Item
        label="Content"
        name="content"
        rules={[
          {
            required: true,
            message: 'Please description for your task',
          },
        ]}
      >
        <Input.TextArea />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 5,
          span: 5,
        }}
      >
        {editmode ? (
        <Button type="primary" htmlType="submit" shape='round' icon={<UploadOutlined />}>
        Update ( {chooseTask?.title} )
      </Button>) : (
          <Button type="primary" htmlType="submit" shape='round' icon={<PlusCircleOutlined />}>
          Add
        </Button>  
        )}   
      </Form.Item>
    </Form>
        </div>
    )
}