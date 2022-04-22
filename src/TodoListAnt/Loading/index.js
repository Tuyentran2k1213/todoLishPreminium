import { Spin } from 'antd';

export default function Loading() {
    return (
        <div className='h-[100vh] w-[100vw] flex justify-center items-center'>           
    <Spin size="large" />
        </div>
    )
}