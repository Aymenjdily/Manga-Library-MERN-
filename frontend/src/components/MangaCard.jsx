import React from 'react'
import { MdDelete } from 'react-icons/md'
import { useAuth } from '../hooks/useAuth'
import { useManga } from '../hooks/useManga'
import { Link } from 'react-router-dom'

const MangaCard = ({ data }) => {
  const {user} = useAuth()
  const {dispatch} = useManga()

  // delete function
  const deleteManga = async () => {
    const res = await fetch(`/api/manga/${data._id}`, {
      method:'DELETE',
      headers:{
        'Authorization' : `Bearer ${user.token}`
      }
    })

    const json = await res.json()

    if(res.ok){
      dispatch({
        type:'DELETE_MANGA',
        payload: json
      })
    }
  }
  
  return (
    <div className='flex justify-between w-full px-2 border-b-2 py-3'>
        <Link to={`/detail/${data._id}`}>
          <span className='font-bold'>
            {
              data.name
            }
          </span>
        </Link>
        <h2 className='capitalize'>
          {
            data.category
          }
        </h2>
        <div className='flex items-center flex-row gap-2'>
          <button className='text-red-500 text-2xl' onClick={deleteManga}>
            <MdDelete />
          </button>
        </div>
    </div>
  )
}

export default MangaCard