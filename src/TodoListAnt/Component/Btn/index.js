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
                    class: 'inline-block mx-1 px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out'
                }
            case 'edited':
                return {
                    method: handleEdit,
                    content: () => (<FaRegEdit/>),
                    class: 'inline-block mx-1 px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out'
                }
            case 'deleted':
                return {
                    method: handleDele,
                    content: () => (<FaTrashAlt/>),
                    class: 'inline-block mx-1 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out'
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