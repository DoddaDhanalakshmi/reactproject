
import React from 'react'
import resturanetimage from "../assets/resturanetimage.jpg"
import Catogory from '../Catogory'
import { useNavigate } from 'react-router-dom'

const Own = () => {
  const navigate = useNavigate()
  const handleexplore = () => {
    navigate("/catogorie")
  }

  return (
    <section className='w-full bg-white'>
      <div className='max-w-[1400px] mx-auto px-10 md:px-20 flex flex-col md:flex-row items-center gap-10 pt-16 pb-16'>
        
  
        <div className='flex-1 flex flex-col items-start'>
          <span className='bg-orange-50 text-orange-600 text-sm md:text-base font-bold px-6 py-2 rounded-full mb-6 shadow-sm border border-orange-100'>
            Serving Best Quality
          </span>
          
          <h1 className='text-5xl md:text-7xl font-extrabold leading-[1.1] text-slate-900'>
            Authentic restaurant <span className='text-orange-500'>flavors</span> in <span className='text-orange-500'>your</span> city
          </h1>
          
          <p className='text-lg text-slate-500 my-6 max-w-[530px] leading-relaxed'>
            Prepared with care using fresh, high-quality ingredients. 
            Enjoy wholesome breakfasts, flavorful lunches, and delicious dinner, 
            freshly cooked and served with love.
          </p>

          <button 
            className='px-8 py-4 bg-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-200 hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 active:scale-95' 
            onClick={handleexplore}
          >
            Explore Menu
          </button>
        </div>

       
        <div className='flex-1 relative'>
       
          <div className='absolute -top-4 -left-4 w-full h-full bg-orange-100 rounded-3xl -z-10 rotate-3'></div>
          
          <div className='overflow-hidden rounded-3xl shadow-2xl border-4 border-white'>
            <img 
              src={resturanetimage} 
              alt="Restaurant" 
              className='w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700'
            />
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Own