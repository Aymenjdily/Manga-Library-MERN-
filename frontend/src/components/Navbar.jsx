import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useLogout } from '../hooks/useLogout'
import { FaUser } from 'react-icons/fa'

const Navbar = () => {
    const {user} = useAuth()
    const {logout} = useLogout()

    const handleLogout = () => {
        logout()
    }

    return (
        <header className="text-gray-200 w-full bg-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <h1 className="flex title-font font-bold items-center text-white mb-4 md:mb-0 text-xl">
                    <Link to='/'>
                        ZineManga Library
                    </Link>
                </h1>
                {
                    !user &&
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <span className="mr-5 hover:text-[#EB3349] duration-300">
                            <Link to='/login'>
                                Login
                            </Link>
                        </span>
                        <span className="mr-5 hover:text-[#EB3349] duration-300">
                            <Link to='/signup'>
                                Sign Up
                            </Link>
                        </span>
                    </nav>
                }
                {
                    user &&
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <div className='text-white mr-5 flex items-center gap-5'>
                            <FaUser size={20} />
                            <span className='capitalize'>
                                {user.username}
                            </span>
                        </div>
                        <button className='bg-red-600 px-7 py-2 font-bold rounded-md' onClick={handleLogout}>
                            Logout
                        </button>
                    </nav>
                }
            </div>
        </header>
  )
}

export default Navbar