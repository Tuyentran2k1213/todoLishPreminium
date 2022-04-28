import { SearchOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useState } from 'react';
import { Input, Table } from 'antd';
import Btn from '../Btn';
import { Link } from 'react-router-dom';

export default function Body() {

  const [search, setSearch] = useState('');

  const tasks = useSelector(state => state.taskReducer.tasks);


  const columns = [
    {
      title: 'Task name',
      width: '30%',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
      width: '30%',
      render: (_, record) => (moment(record.time).format('DD/MM/YY - hh:mm:ss'))
    },
    {
      title: 'Setting',
      key: 'setting',
      width: '20%',
      render: (_, record) => (
          <div className='w-full h-full flex justify-around'>
            {record.done || (<>
                <Btn type='checked' data={record.key}/>
                <Btn type='edited' data={record.key}/>
              </>)}
              <Btn type='deleted' data={record.key}/>
        </div>
        ),
    },
  ];




  const handleChange = e => {
      setSearch(e.target.value);
  }
  
  const theTasks = tasks.filter(task => {
      if(search == ''){
        return task;
      }
      if(task.title.toLowerCase().includes(search.toLowerCase())){
        return task;
      }
    })

  const taskDone = theTasks.filter(task => task.done);
  const taskUndone = theTasks.filter(task => !task.done);

    return (
        <>

        <div>
        <Input
        onChange={handleChange}
        value={search}
        size="large" placeholder="Search for the tasks here" suffix={<SearchOutlined />} />
        </div>
        
<div className="flex flex-col py-5">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 border-2 border-gray-300">
    <div className="py-4 inline-block min-w-full lg:px-1">
      <div className="overflow-hidden">
        <h1 className='uppercase text-2xl font-bold'>Task to do</h1>
        <div className='w-full'>
            <Table columns={columns}
            dataSource={taskUndone} 
            scroll={{ y: 400, x: 'auto'}} 
            bordered={true}
            pagination={false}
            expandable={{
              expandedRowRender: record => (<div className='text-center'>
              <p style={{ margin: 0 }}>{record.content.lenght <= 120 ? record.content : `${record.content.slice(0, 120)}.....`}</p>
              <Link to={`/todoLishPreminium/detail/${record.key}`}>
              <button className='bg-[#FF9A00] px-5 py-2 rounded-md hover:bg-[#e38e0d] text-black'>Detail</button>
              </Link>
              </div>),
            }}
            />
        </div>
        {/* <table className="w-full text-center">
          <thead className="border-b bg-gray-800 border-b">
            <tr>
              <th scope="col" className="w-2/3 text-sm font-medium text-white px-6 py-4">
                Tasks
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4 flex items-center justify-center">
                <ControlOutlined/> <span> Options</span>
              </th>
            </tr>
          </thead>
          <tbody>
          {theTasks.map((task, index) => {
              if(!task.done){
                return (
                  <tr key={index} className="bg-white border-b">
                    <ItemTask num={index} dataTask={task}/>
                  </tr>
                )
              }
            })}
          </tbody>
        </table> */}
      </div>
    </div>
  </div>
</div>

<hr />

<div className="flex flex-col py-5">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 border-2 border-gray-300">
    <div className="py-4 inline-block min-w-full lg:px-1">
      <div className="overflow-hidden">
        <h1 className='uppercase text-2xl font-bold'>Task done</h1>
        {/* <table className="w-full text-center">
          <thead className="border-b bg-gray-800 border-b">
            <tr>
              <th scope="col" className="w-2/3 text-sm font-medium text-white px-6 py-4">
                Tasks
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4 flex items-center justify-center">
                <ControlOutlined/> <span> Options</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {theTasks.map((task, index) => {
              if(task.done){
                return (
                  <tr key={index} className="bg-white border-b">
                    <ItemTask num={index} dataTask={task} done />
                  </tr>
                )
              }
            })}
          </tbody>
        </table> */}
        <div>
            <Table columns={columns}
            dataSource={taskDone} 
            scroll={{ y: 300, x: '100%'}} 
            bordered={true}
            pagination={false}
            expandable={{
              expandedRowRender: record => (<div className='text-center'>
              <p style={{ margin: 0 }}>{record.content}</p>
              <Link to={`/todoLishPreminium/detail/${record.key}`}>
              <button className='bg-[#FF9A00] px-5 py-2 rounded-md hover:bg-[#e38e0d] text-black'>Detail</button>
              </Link>
              </div>),
            }}
            />
        </div>
      </div>
    </div>
  </div>
</div>


  </>
    )
}