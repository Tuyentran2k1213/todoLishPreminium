import { message, Modal } from 'antd';
import { FaCheck, FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { action } from '../../redux';

import server from '../../server';

export default function Btn({type, data}) {

    const dispatch = useDispatch();
    const { userLog, tasks } = useSelector(state => state.taskReducer);
    
    const key = 'updatable';

    const { checkedTask, deleTask, editTask } = action;

    const handleCheck = () => {
        dispatch(checkedTask(data));
    }

    const handleEdit = () => {
        dispatch(editTask(data));
    }

    const handleDele = () => {
        dispatch(deleTask(data));
    }

    const handleSave = () => {
        if(userLog){
            message.loading({ content: 'Saving...', key });
            server.changeUser(userLog.id, {...userLog, todoList: [...tasks]})
            .then(res => {
                message.success({ content: 'Save done!', key, duration: 1.5 });
            })
            .catch(err => {
                message.error({ content: 'Save undone, something happen', key, duration: 1.5 });
            })
        } else {
            Modal.error({
                title: `Can't Save !!!`,
                content: `You can't save if you don't login`,
            })
        }
    }

    const classBtn = () => {
        switch(type){
            case 'checked':
                return {
                    method: handleCheck,
                    content: () => (<FaCheck/>),
                    class: 'bg-[#FFDE7D] px-5 py-2 rounded-md hover:bg-[#e0c36d]'
                }
            case 'edited':
                return {
                    method: handleEdit,
                    content: () => (<FaRegEdit/>),
                    class: 'bg-[#3EC1D3] px-5 py-2 rounded-md hover:bg-[#54b1bd]'
                }
            case 'deleted':
                return {
                    method: handleDele,
                    content: () => (<FaTrashAlt/>),
                    class: 'bg-[#FF165D] px-5 py-2 rounded-md hover:bg-[#d41e55] text-black'
                }
            case 'saved':
                return {
                    method: handleSave,
                    content: () => (<span>Save Change</span>),
                    class: 'bg-[#00FFC6] px-5 py-2 rounded-md hover:bg-[#01dfaf] text-black'
                }
            default:
                alert('error');
        }
    }

    const inline = classBtn();

    return (
        <>
        <button type='button' onClick={inline.method} className={inline.class}>
            {inline.content()}
        </button>
        </>
    )
}