import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { Card } from 'antd';
import moment from 'moment';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from "react-router-dom";
import Btn from "../Btn";
import { useState } from "react";

export default function Detail() {

    const param = useParams();
    const currentTask = useSelector(state => state.taskReducer.tasks[param.id]);

    const [btn, setBtn] = useState(currentTask.done);

    return (
        <Card title={<Link to={'/todoLishPreminium/main'}><div className="flex items-center text-black hover:text-blue-500"><AiOutlineArrowLeft/> Back</div></Link>}>
      <div className="w-full lg:flex">
  <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style={{backgroundImage: `url('https://i.pravatar.cc/300?img=${param.id}')`}} title="Woman holding a mug">
  </div>
  <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col flex-wrap justify-between leading-normal">
    <div className="mb-8">
      <div className="text-gray-900 font-bold text-xl mb-2 uppercase">{currentTask.title}</div>
      <p className="text-gray-700 text-base"><b>Describe: </b>{currentTask.content.length <= 77 ? currentTask.content : `${currentTask.content.slice(0, 77)}.....`}</p>
    </div>
    <hr/>
    <div className="flex items-center mt-4">
      <div className="text-sm">
        <p className="text-gray-900 leading-none"><b>Date: </b>{moment(currentTask.time).format('DD - MM - YYYY')}</p>
        <p className="text-gray-600"><b>Time: </b>{moment(currentTask.time).format('hh : mm : ss')}</p>
      </div>
    </div>
    <div className="flex justify-end">
    {btn || (
      <>
      <div onClick={() => setBtn(!btn)}>
      <Btn type='checked' data={param.id}/>
      </div>
      <Btn type='edited' data={param.id}/>
      </>
    )}
    <Link to='/todoLishPreminium/main'>
    <Btn type='deleted' data={param.id}/>
    </Link>
  </div>
  </div>
</div>
    </Card>

    )
}