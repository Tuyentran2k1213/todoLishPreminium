import { Collapse } from 'antd';
import { Link } from "react-router-dom";
import Btn from '../Btn';

const { Panel } = Collapse;

export default function ItemTask({done, dataTask, num}) {

    return (
        <>
              
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              <Collapse>
            <Panel header={dataTask.title} key="1">
            <p>
                {dataTask.content.length <= 50 ? dataTask.content : `${dataTask.content.slice(0, 50)}.....`}
            </p>
            <p>
              {dataTask.time}
            </p>
            <p>
            <Link to={`/todoLishPreminium/detail/${num}`}>
            <button type="button" className="inline-block px-6 py-2.5 bg-yellow-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-yellow-600 hover:shadow-lg focus:bg-yellow-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-700 active:shadow-lg transition duration-150 ease-in-out"
            >Detail</button>
            </Link>
            </p>
            </Panel>
                </Collapse>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              {done || (<>
                <Btn type='checked' data={num}/>
                <Btn type='edited' data={num}/>
              </>)}
              <Btn type='deleted' data={num}/>
              </td>
              </>
    )
}