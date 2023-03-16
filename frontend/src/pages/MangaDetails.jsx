import React,{ useState, useEffect } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useParams, Link } from 'react-router-dom'

const MangaDetails = () => {
    const {user} = useAuth()
    const [data, setData] = useState(null)
    const {id} = useParams()

    const getDetails = async () => {
        const res = await fetch(`/api/manga/${id}`,{
            headers:{
                'Authorization' : `Bearer ${user.token}`
            }
        })
        const data = await res.json()
    
        if(res.ok){
            setData(data)
        }
    }

    useEffect(() => {
        getDetails()
    }, [id])
    

    return (
        <section class="text-gray-600 body-font py-24 px-5">
            
            <div class="container mx-auto justify-center flex h-[65vh] text-center flex-col items-center">
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 items-center flex justify-center">
                    <img class="object-cover object-center rounded " alt="hero" src={data?.img} />
                </div>
                <div class="lg:flex-grow md:w-1/2 mt-10 flex justify-center flex-col items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        {data?.name}
                    </h1>
                    <p class="mb-8 leading-relaxed">
                        {data?.category} / {data?.status}
                    </p>
                    <div class="flex justify-center">
                        <Link to={'/'}>
                            <button className='text-[#DC2626] font-bold'>
                                Back to Dashboard
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MangaDetails