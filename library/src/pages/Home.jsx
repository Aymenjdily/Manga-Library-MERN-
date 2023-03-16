import React from 'react'
import { Category, Footer, Main, MostPopular, MostViewed, Navbar } from '../components'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Category />
        <div className='container flex md:flex-row flex-col mx-auto py-16 px-5'>
            <article className=''>
                <Main />
            </article>
            <div className='flex flex-col items-end justify-center flex-1'>
              <article>
                <MostPopular />
              </article>

              <article className='mt-10'>
                <MostViewed />
              </article>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Home