import React,{ useState} from 'react'
import { genres } from '../constants/category'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const Category = () => {
  const [visible, setVisible] = useState(8)
  const [isMax, setIsMax] = useState(false)

  const showMoreCategory = () => {
    setVisible((prev) => prev + 5)

    if(visible === 33){
      setIsMax((prev) => !prev)
    }
  }

  const showLessCategory = () => {
    setVisible(8)
    setIsMax((prev) => !prev)
  }

  return (
    <section className='py-6 border-b-2 border-gray-300'>
      <div className='container px-5 mx-auto'>
        <div className='gap-8 flex flex-wrap'>
          {genres.slice(0,visible).map((category) => (
            <button id={category.id} className="capitalize">
              {category.title}
            </button>
          ))}
          {
            isMax ?
            <button className='flex items-center gap-2' onClick={showLessCategory}>
              Less <FaArrowAltCircleLeft /> 
            </button>
            :
            <button className='flex items-center gap-2' onClick={showMoreCategory}>
              More <FaArrowAltCircleRight />
            </button>
          }
        </div>
      </div>
    </section>
  )
}

export default Category