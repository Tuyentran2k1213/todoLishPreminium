import { Navbar, Header } from '../Component';

export default function Layout({ Component }) {
    return (
        <>
        <div className='h-auto mx-auto p-10 bg-[#F1F1F6] mt-6 mx-10'>
        <Header/>
        <Navbar/>
        <Component/>
        </div>
        </>
    )
}