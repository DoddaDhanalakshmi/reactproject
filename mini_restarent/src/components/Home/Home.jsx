
import React, { useContext } from 'react'
import Navbar from '../pages/Navbar'
import Catogories from '../../Catogories'
import Card from '../Card'
import { food_items } from '../../Food'
import Own from '../own'
import { DataContext } from '../../Context/Context'

const Home = () => {
  let { category, setcatgory, input } = useContext(DataContext)

  function filteringproducts(catogories) {
    if (catogories === "All") {
      setcatgory(food_items)
    } else {
      let result = food_items.filter((item) => (item.food_category.toLowerCase() === catogories.toLowerCase()))
      setcatgory(result)
    }
  }

  return (
    <div className='bg-slate-50 min-h-screen font-sans'>
      <Navbar />
      
      <Own />

      {!input ? (
        <div className='py-12 bg-white shadow-sm'>
           <div className='max-w-[1200px] mx-auto px-6'>
              <h2 className='text-2xl font-extrabold text-slate-800 mb-8 flex items-center gap-3'>
                <span className='w-2 h-8 bg-orange-500 rounded-full'></span>
                What’s on your mind?
              </h2>
              
              <div className='flex flex-wrap justify-center md:justify-between items-center gap-6'>
                {Catogories.map((each, index) => {
                  return (
                    <div 
                      key={index}
                      className='group flex flex-col items-center gap-3 cursor-pointer transition-all' 
                      onClick={() => filteringproducts(each.name)}
                    >
                      <div className='w-[100px] h-[100px] md:w-[120px] md:h-[120px] bg-orange-50 rounded-full flex justify-center items-center overflow-hidden border-2 border-transparent group-hover:border-orange-400 group-hover:shadow-xl transition-all duration-300'>
                       
                         <div className='text-4xl group-hover:scale-110 transition-transform duration-300'>
                            {each.image} 
                         </div>
                      </div>
                      <span className='font-bold text-slate-700 group-hover:text-orange-600 transition-colors'>
                        {each.name}
                      </span>
                    </div>
                  )
                })}
              </div>
           </div>
        </div>
      ) : null}

      <div className='max-w-[1300px] mx-auto py-16 px-6'>
        <div className='flex justify-between items-center mb-10'>
          <h2 className='text-3xl font-black text-slate-900'>
            {input ? `Search results for "${input}"` : "Our Special Menu"}
          </h2>
          <div className='h-[2px] flex-1 bg-slate-200 ml-6 hidden md:block'></div>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 justify-items-center'>
          {category.length > 0 ? (
            category.map((each) => (
              <Card 
                key={each.id} 
                name={each.food_name} 
                image={each.food_image} 
                id={each.id} 
                price={each.price} 
                type={each.food_type} 
              />
            ))
          ) : (
            <div className='col-span-full py-20 text-center'>
              <p className='text-xl text-slate-400 font-bold'>No items found. Try a different search!</p>
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export default Home