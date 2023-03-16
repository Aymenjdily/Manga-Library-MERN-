import React,{ useEffect } from 'react'
import { useManga } from '../hooks/useManga'
import { Link } from 'react-router-dom'

const MostPopular = () => {
  const {mangas, dispatch} = useManga()

  // get All Manga
  const getManga = async () => {
    const res = await fetch(`/api/getmanga`)
    const data = await res.json()

    if(res.ok){
        dispatch({
            type: 'SET_MANGA',
            payload: data
        })
        // setData(data)
    }
  }

  useEffect(() => {
    getManga()
  }, [])

  return (
    <div>
      <h1 className='text-xl capitalize font-bold'>
        Most Popular
      </h1>
      <div className='grid grid-cols-2 mt-10 gap-10'>
        {
          mangas && mangas.filter((val) => {
            if (val.status.toLowerCase().includes('popular')){
              return val
            }
          }).map((manga) => (
            <div key={manga._id} className="text-center items-center flex flex-col gap-5">
              <img src={manga.img} alt={manga.name} />
              <h1 className='font-bold capitalize'>
                {manga.name}
              </h1>
              <Link to={`${manga.link}`}>
                <button className='text-[#EB3349]'>
                  Read Manga
                </button>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default MostPopular