import { LogoutIcon } from '@heroicons/react/outline'
import { UserCircleIcon } from '@heroicons/react/solid'

import { useDispatch } from 'react-redux'
import { action } from '../../redux'
import { message } from 'antd';
import { useNavigate } from 'react-router-dom';


export default function BtnLogin({ data }) {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignout = () => {
        const key = 'updatable'
        message.loading({ content: 'Logout...', key, duration: 1 })
            .then(() => {
            dispatch(action.logout())
            navigate('/todoLishPreminium/login');
        })
            .then(() => {
                message.success({ content: 'Done', key, duration: 1 })
            })
    }

    return (
        <>
        <a className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 flex items-center">
              <UserCircleIcon className='h-[40px] w-[40px]'/>{data.name}
            </a>
            <a className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            onClick={handleSignout}
            >
            <LogoutIcon className='h-[30px] w-[30px]'/> Sign out
            </a>
        </>
    )
}