/* eslint-disable react-hooks/exhaustive-deps */
import React,{ useState, useEffect } from 'react'
import { MangaCard } from '../components'
import { genres } from '../constants/Genres'
import { FaSearch } from 'react-icons/fa'
import { useAuth } from '../hooks/useAuth'
import { useManga } from '../hooks/useManga'

const Dashboard = () => {
  const [name, setName] = useState('')
  const [img, setImg] = useState('')
  const [category, setCategory] = useState('')
  const [link, setLink] = useState('')
  const [status, setStatus] = useState('')
  const [emptyFields, setEmptyFields] = useState([])
  const [error, setError] = useState(null)
  const {user} = useAuth()
  const {mangas, dispatch} = useManga()
  // const [data, setData] = useState([])
  
  // Filters State
  // const [filterCategory, setFilterCategory] = useState('all')

  // console.log(data)
  // console.log(filterCategory)
  // add manga
  const addManga = async (e) => {
    e.preventDefault()

    
    const manga = {img, name, category, link, status}
    
    const res = await fetch('/api/manga',{
      method:'POST',
      body: JSON.stringify(manga),
      headers:{
        'Content-Type' : 'application/json',
        'Authorization' : `Bearer ${user.token}`
      }
    })

    const data = await res.json()

    if(!res.ok){
      setError(data.error)
      setEmptyFields(data.emptyFields)
    }

    if(res.ok){
      setError(null)
      setEmptyFields([])
      setName('')
      setImg('')
      setCategory('')
      setLink('')
      setStatus('')

      dispatch({
        type:'CREATE_MANGA',
        payload:data
      })
    }
  }

  // get All Manga
  const getManga = async () => {
    const res = await fetch(`/api/manga`,{
        headers:{
            'Authorization' : `Bearer ${user.token}`
        }
    })
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
      if(user){
          getManga()
      }
  }, [mangas])

  // useEffect(() => {
  //   getFilteredManga()
  // }, [filterCategory])

  // // Filters Functions
  // const getFilteredManga = () => {
  //   if(filterCategory === 'all'){
  //     setData(mangas)
  //   }
  //   else{
  //     const updated = data.filter(
  //       (item) => { return item.category.toLowerCase().includes(filterCategory.toLowerCase())}
  //     )

  //     setData(updated)
  //   }
  // }

  return (
    <section class="text-gray-600 body-font flex items-center justify-center bg-gray-900">
      <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        
        <form class="lg:w-1/3 md:w-1/2 bg-white sm:mr-10 p-8 rounded-lg flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0" onSubmit={addManga}>
          <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Add the Manga</h2>
            <p class="leading-relaxed mb-5 text-gray-600">Fill all fields before Submit Please</p>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
              <input type="text" id="name" value={name} name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div class="relative mb-4">
              <label for="img" class="leading-7 text-sm text-gray-600">Image ( URL )</label>
              <input type="text" id="img" name="img" value={img} class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setImg(e.target.value)}/>
            </div>
            <div class="relative mb-4">
              <label for="category" class="leading-7 text-sm text-gray-600">Category</label>
              <select id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setCategory(e.target.value)}>
                {
                  genres.map((genre) => (
                    <option key={genre.id} value={genre.title}>
                      {genre.title}
                    </option>
                  ))
                }
              </select>
            </div>
            <div class="relative mb-4">
              <label for="link" class="leading-7 text-sm text-gray-600">Link to ( ZineManga )</label>
              <input type="link" id="link" value={link} name="link" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" onChange={(e) => setLink(e.target.value)}/>
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">Status</label>
              <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setStatus(e.target.value)}>
                <option value="popular">Popular</option>
                <option value="normal">Normal</option>
                <option value="mostViewed">Most Viewed</option>
              </select>
            </div>
            <button type="submit" class="text-white bg-[#EB3349] border-0 py-2 px-6 focus:outline-none rounded text-lg">
              Add Manga
            </button>
            {
              error && 
              <div>
                {error}
              </div>
            }
            <p class="text-xs text-gray-500 mt-3">ZineManga Library is an Admin Project to add the manga that shows in our main Websites.</p>
        </form>

        <div class="lg:w-2/3 md:w-1/2 w-full px-8 bg-white flex-col rounded-lg overflow-hidden p-4 flex items-start justify-start relative">
          {/* <div className='flex flex-col w-full'>
              <p>Filter by :</p>
              <div className='flex justify-between gap-10 mt-3'>
                <select class="bg-gray-50 border flex-1 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setFilterCategory(e.target.value)}>
                  {
                    genres.map((genre) => (
                      <option key={genre.id} value={genre.id}>
                        {genre.title}
                      </option>
                    ))
                  }
                </select>
                <div className='flex-1 flex items-center gap-5'>
                  <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                  <FaSearch />
                </div>
              </div>
          </div> */}
          <h1 className='my-5'>
            Total Manga ( {mangas?.length} )
          </h1>
          <div className='flex justify-between w-full mb-5 bg-slate-500 rounded-md text-white py-2 px-2'>
            <span>
              Name
            </span>
            <span>
              Category
            </span>
            <span>
              Action
            </span>
          </div>
          <div className='w-full overflow-y-scroll'>
            {
              mangas && mangas.map((manga) => (
                <MangaCard key={manga._id} data={manga} />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard