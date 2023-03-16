import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header class="text-gray-600 bg-[#EB3349] body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to='/'>
          <h1 class="flex title-font font-bold items-center text-white mb-4 md:mb-0">
            <span class="text-xl">ZineManga Library</span>
          </h1>
        </Link>
        <div className='md:ml-auto flex flex-wrap md:w-[400px] items-center border-2 text-white text-base justify-between border-gray-300 py-2 px-4'>
          <input type="text" className='bg-transparent outline-none placeholder:text-white' placeholder='Search a manga...' />
          <FaSearch />
        </div>
      </div>
    </header>
  )
}

export default Navbar