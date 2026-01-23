
import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";
import { NavLink, useNavigate } from "react-router-dom";
import { DataContext } from '../../Context/Context';
import { food_items } from '../../Food';
import { useSelector } from 'react-redux';

const Navbar = () => {
  let { input, setinput, category, setcatgory } = useContext(DataContext)
  const navigate = useNavigate()
  let items = useSelector(state => state.cart.cart)

  const gotocart = () => {
    navigate("/cart")
  }

  useEffect(() => {
    let result = food_items.filter((item) => item.food_name.toLowerCase().includes(input.toLowerCase()))
    setcatgory(result)
  }, [input])

  return (
    <div className='w-full h-[100px] flex items-center px-5 md:px-8 bg-white shadow-sm sticky top-0 z-50'>

      <div className='flex items-center gap-3 cursor-pointer mr-10 active:scale-95 transition-transform' onClick={() => navigate("/")}>
        <div className='w-14 h-14 bg-orange-500 flex justify-center items-center rounded-xl shadow-lg shadow-orange-100'>
          <MdFastfood className='w-7 h-7 text-white' />
        </div>
        <div className='flex flex-col leading-tight'>
          <span className='text-xl font-extrabold text-orange-600 tracking-tight'>Mini</span>
          <span className='text-lg font-semibold text-gray-700'>Restaurant</span>
        </div>
      </div>
      <ul className='hidden md:flex gap-8 font-semibold text-gray-700 mr-5'>
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "text-orange-500 border-b-2 border-orange-500" : ""}
          >
            Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink 
            to="/menu" 
            className={({ isActive }) => isActive ? "text-orange-500 border-b-2 border-orange-500" : ""}>
            Menu
          </NavLink>
        </li> */}
        <li>
          <NavLink 
            to="/catogorie" 
            className={({ isActive }) => isActive ? "text-orange-500 gap-3 border-b-2 border-orange-500  " : ""}>
             catogories
          </NavLink>
        </li>
      </ul>

      <form
        className='w-[40%] h-[55px] bg-orange-50 border border-orange-100 flex items-center px-5 gap-3 rounded-full shadow-inner md:w-[70%] focus-within:bg-white focus-within:border-orange-400 focus-within:shadow-md transition-all'
        onSubmit={(e) => { e.preventDefault() }}
      >
        <FaSearch className='w-[20px] h-[20px] text-orange-400' />
        <input
          type="text"
          placeholder='search favorite flavors...'
          className='w-[80%] bg-transparent outline-none text-[16px] md:text-[18px] text-gray-700 font-medium placeholder:text-gray-400'
          onChange={(e) => setinput(e.target.value)}
          value={input}
        />
      </form>

   
      <div 
        className='w-[60px] h-[60px] bg-orange-100 flex justify-center items-center rounded-2xl shadow-md relative ml-10 cursor-pointer hover:bg-orange-500 group transition-all duration-300'
        onClick={gotocart}
      >
        {items.length > 0 && (
          <span className='absolute -top-2 -right-2 bg-orange-600 text-white font-bold text-[10px] w-6 h-6 flex justify-center items-center rounded-full border-2 border-white shadow-sm'>
            {items.length}
          </span>
        )}
        <LuShoppingBag className='w-[30px] h-[30px] text-orange-600 group-hover:text-white transition-colors'/>
      </div>
      
    </div>
  )
}

export default Navbar