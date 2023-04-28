import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header class="bg-white body-font">
      <div class="container mx-auto flex justify-center flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to='/'>
          <h1 class="flex title-font font-bold items-center text-[#EB3349] mb-4 md:mb-0">
            <span class="text-xl">ZineManga Library</span>
          </h1>
        </Link>
        <div className='md:ml-auto gap-5 flex flex-wrap justify-center items-center'>
          <nav>
            <Link to='/library'>
              <span className='text-white cursor-pointer rounded-md hover:text-[#EB3349] bg-[#EB3349] px-5 py-3 duration-300'>Browser Library</span>
            </Link>
          </nav>
          <div className='border-2 lg:w-[400px] flex items-center text-gray-600 text-base justify-between rounded-lg border-gray-600 py-2 px-4'>
            <input type="text" className='bg-transparent outline-none placeholder:text-gray-600' placeholder='Search a manga...' />
            <FaSearch />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar