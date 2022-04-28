import { FaCheck, FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { action } from '../../redux';

export default function Btn({type, data}) {

    const dispatch = useDispatch();

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