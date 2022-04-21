import { ControlOutlined, SearchOutlined } from '@ant-design/icons';
import ItemTask from './ItemTask.';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { Input } from 'antd';

export default function Body() {

  const [search, setSearch] = useState('');

  const tasks = useSelector(state => state.taskReducer.tasks);

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

  console.log(tasks);

    return (
        <>

        <div>
        <Input
        onChange={handleChange}
        value={search}
        size="large" placeholder="Search for the tasks here" suffix={<SearchOutlined />} />
        </div>
        
<div className="flex flex-col py-5">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 border-2 border-gray-500">
    <div className="py-4 inline-block min-w-full lg:px-1">
      <div className="overflow-hidden">
        <h1 className='uppercase text-2xl font-bold'>Task to do</h1>
        <table className="w-full text-center">
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
        </table>
      </div>
    </div>
  </div>
</div>

<hr />

<div className="flex flex-col py-5">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 border-2 border-gray-500">
    <div className="py-4 inline-block min-w-full lg:px-1">
      <div className="overflow-hidden">
        <h1 className='uppercase text-2xl font-bold'>Task done</h1>
        <table className="w-full text-center">
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
        </table>
      </div>
    </div>
  </div>
</div>

  </>
    )
}