import React from 'react'
import { FaBook, FaComment, FaDailymotion, FaUserSecret } from 'react-icons/fa'

const Services = () => {
  return (
    <section className='px-5 py-24'>
        <div className='container mx-auto'>
            <div className='bg-white flex flex-wrap gap-10 items-center md:justify-between justify-start w-full'>
                <div className='flex flex-row items-center w-[300px] gap-5'>
                    <div className='bg-gray-900 p-4 rounded-lg text-white text-3xl'>
                        <FaBook />
                    </div>
                    <div>
                        <h1 className='text-lg font-bold uppercase'>
                            Read Manga Online
                        </h1>
                        <p className='text-[13px] uppercase text-gray-500'>
                            over hundreds of manga
                        </p>
                    </div>
                </div>
                <div className='flex flex-row items-center w-[300px] gap-5'>
                    <div className='bg-gray-900 p-4 rounded-lg text-white text-3xl'>
                        <FaComment />
                    </div>
                    <div>
                        <h1 className='text-lg font-bold uppercase'>
                            Clear Communication
                        </h1>
                        <p className='text-[13px] uppercase text-gray-500'>
                            Lorem, ipsum.
                        </p>
                    </div>
                </div>
                <div className='flex flex-row items-center w-[300px] gap-5'>
                    <div className='bg-gray-900 p-4 rounded-lg text-white text-3xl'>
                        <FaBook />
                    </div>
                    <div>
                        <h1 className='text-lg font-bold uppercase'>
                            SIMPLE RETURN POLICY
                        </h1>
                        <p className='text-[13px] uppercase text-gray-500'>
                            over hundreds of manga
                        </p>
                    </div>
                </div>
                <div className='flex flex-row items-center w-[300px] gap-5'>
                    <div className='bg-gray-900 p-4 rounded-lg text-white text-3xl'>
                        <FaBook />
                    </div>
                    <div>
                        <h1 className='text-lg font-bold uppercase'>
                            Secured Payment
                        </h1>
                        <p className='text-[13px] uppercase text-gray-500'>
                            SECURED TRANSACTION
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services