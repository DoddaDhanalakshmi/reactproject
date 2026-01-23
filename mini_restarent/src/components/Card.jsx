
import React from 'react';
import { GiChickenOven, GiLindenLeaf } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { Additem } from '../redux/Cartslice';

const Card = ({ name, image, id, price, type }) => {
    const dispatch = useDispatch();

    return (
        <div className='w-[280px] h-[420px] bg-white p-4 rounded-3xl flex flex-col gap-3 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group'>
            
          
            <div className='w-full h-[220px] overflow-hidden rounded-2xl bg-gray-50 relative'>
                <img 
                    src={image} 
                    alt={name} 
                    className='object-cover w-full h-full group-hover:scale-110 transition-transform duration-500' 
                />
                
                <div className='absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1 shadow-sm'>
                    {type === "veg" ? <GiLindenLeaf className='text-green-600 text-sm' /> : <GiChickenOven className='text-red-500 text-sm' />}
                    <span className='text-[10px] font-bold uppercase text-gray-700'>{type}</span>
                </div>
            </div>
            
            
            <div className='flex flex-col gap-1 px-1'>
                <div className='text-xl font-bold text-slate-800 truncate group-hover:text-orange-600 transition-colors'> 
                    {name} 
                </div>
                
                <div className='w-full flex justify-between items-center mt-2'>
                    <div className='flex flex-col'>
                        <span className='text-[10px] text-gray-400 font-bold uppercase tracking-wider'>Price</span>
                        <div className='text-xl font-black text-slate-900'>Rs {price}</div>
                    </div>
                    
                    <div className='flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-full border border-gray-100'>
                         <span className='text-xs font-bold text-gray-500 capitalize'>{type}</span>
                    </div>
                </div> 
            </div>

           
            <button 
                className='mt-auto bg-orange-500 text-white w-full py-3.5 rounded-xl hover:bg-orange-600 font-bold shadow-lg shadow-orange-100 transition-all active:scale-95 flex justify-center items-center gap-2' 
                onClick={() => dispatch(Additem({ id, name, image, price, qty: 1 }))}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default Card;