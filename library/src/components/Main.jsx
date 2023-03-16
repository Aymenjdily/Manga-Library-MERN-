import React,{ useState, useEffect } from 'react'
import { useManga } from '../hooks/useManga'
import { Link } from 'react-router-dom'

const Main = () => {
  const [category, setCategory] = useState('all')
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
        {category} manga
      </h1>
      <div className='grid grid-cols-4 mt-20 gap-10'>
        {
          mangas && mangas.map((manga) => (
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

export default Main