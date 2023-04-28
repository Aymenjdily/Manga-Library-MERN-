import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <section class="text-gray-300 bg-header body-font">
        <div className='bg-overlay'>
            <div class="container mx-auto h-[70vh] px-5 py-24">
                <div class="flex flex-col h-full items-center justify-center text-center">
                    <h1 class="title-font sm:text-7xl text-3xl mb-4 font-medium text-white">Over <span className='text-[#EB3349]'>500+</span>
                        <br class="hidden lg:inline-block"/>Manga
                    </h1>
                    <p class="my-8 text-xl leading-relaxed">
                        Enjoy your Reading journey by browsing many of
                        <br/>
                        manga from our library
                    </p>
                    <div class="flex justify-center">
                        <Link to="/library">
                            <button class="inline-flex text-white bg-[#EB3349] border-0 py-2 px-6 focus:outline-none rounded text-lg">
                                Explore Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Header