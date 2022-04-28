import { NavLink } from "react-router-dom"

export default function BtnLogout() {
    return (
        <>
        <NavLink to='/todoLishPreminium/login' className={({isActive}) => (
            `ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium whitespace-nowrap text-base  font-medium ${isActive ? `bg-rose-600 hover:bg-rose-700 hover:text-white text-white` : `text-gray-500 hover:text-gray-900 bg-gray-200 hover:bg-gray-300`}`
        )}>
              Sign in
            </NavLink>
            <NavLink to='/todoLishPreminium/signup' className={({isActive}) => (
                `ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium ${isActive ? `bg-rose-600 hover:bg-rose-700 hover:text-white text-white` : `text-white bg-indigo-400 hover:bg-indigo-500 text-gray-500 hover:text-gray-900`}`
            )}>
            Sign up
            </NavLink>
        </>
    )
}