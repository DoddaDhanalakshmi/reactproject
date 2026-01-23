
import React from 'react'
import { PiTrashBold } from "react-icons/pi";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Decrementquantity, Incremetquantity, Removeitem } from './redux/Cartslice';
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const cart_items = useSelector(state => state.cart.cart);
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const handleplaceorder=()=>{
    console.log("order")
    toast.success("you are order has been placed successfully")
    
  }

  let subtotal = cart_items.reduce((acc, item) => acc + (item.price * item.qty), 0);
  let taxes = Number((subtotal * 0.5 / 100).toFixed(2));
  let deliveryFee = 20
  let finalTotal = subtotal + deliveryFee + taxes;

  if (!cart_items || cart_items.length === 0) {
    return (
      
      <div className='w-full h-screen flex flex-col justify-center items-center gap-5'>
        <h2 className='text-2xl font-bold text-gray-500'>Your Cart is Empty!</h2>
        <button 
          onClick={() => navigate('/')} 
          className='bg-orange-500 text-white px-6 py-2 rounded-lg font-bold shadow-md hover:bg-orange-600'
        >
          Go Back to order something
        </button>
      </div>
    );
  }

  return (
    
    <>
    <ToastContainer 
        position="top-right"
        autoClose={1000}/>
    <div className='w-full min-h-screen bg-gray-50 py-10 flex flex-col items-center px-4'>
      <h1 className='text-3xl font-bold mb-10 text-gray-800'>Cart</h1>
     
      <div className='flex flex-col gap-6 w-full items-center mb-10'>
        {cart_items.map((item) => (
          <div key={item.id} className='w-full md:w-[750px] bg-white shadow-md rounded-2xl p-6 border border-gray-100'>
            <div className='flex justify-between items-center'>
              <div className='flex gap-6 items-center'>
                <div className='w-[80px] h-[80px] md:w-[120px] md:h-[120px] overflow-hidden rounded-xl bg-gray-100'>
                  <img src={item.image} alt={item.name} className='object-cover w-full h-full' />
                </div>
                <div className='flex flex-col gap-2'>
                  <div className='text-lg md:text-xl font-bold text-gray-800'>{item.name}</div>
                  <div className='flex items-center w-[100px] h-[35px] bg-gray-100 rounded-lg border border-gray-300 font-bold'>
                    <button className='flex-1' onClick={()=>dispatch(Decrementquantity(item.id))}>-</button>
                    <span className='flex-1 flex justify-center bg-white text-sm'>{item.qty}</span>
                    <button className='flex-1' onClick={()=>dispatch(Incremetquantity(item.id))}>+</button>
                  </div>
                </div>
              </div>
              <div className='flex flex-col items-end gap-6'>
                <span className='text-lg md:text-xl font-bold text-green-600'>Rs {item.price}</span>
                <PiTrashBold className='text-2xl text-red-500 cursor-pointer hover:scale-110 transition-transform' onClick={() => dispatch(Removeitem(item.id))}/>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full md:w-[750px] bg-white shadow-xl rounded-2xl p-8 border border-gray-100'>
        <h2 className='text-2xl font-bold mb-6 border-b pb-4 text-gray-700'>Bill Details</h2>
        
        <div className='flex flex-col gap-4'>
          <div className='flex justify-between text-gray-600'>
            <span>items total price</span>
            <span className='font-semibold'>Rs {subtotal}</span>
          </div>

          <div className='flex justify-between text-gray-600'>
            <span>Delivery Fee</span>
            <span className='font-semibold'>Rs {deliveryFee}</span>
          </div>

          <div className='flex justify-between text-gray-600'>
            <span>Taxes</span>
            <span className='font-semibold'>Rs {taxes}</span>
          </div>

          <hr className='my-2 border-gray-200' />

          <div className='flex justify-between text-2xl font-extrabold text-gray-800'>
            <span>Total</span>
            <span className='text-orange-600'>Rs {finalTotal}</span>
          </div>
        </div>

        <button className='w-full bg-orange-500 text-white mt-8 py-4 rounded-xl font-bold text-xl shadow-lg hover:bg-orange-600 transition-all active:scale-95' onClick={handleplaceorder}>
          Place Order Now
        </button>
      </div>
    </div>
    </>
  )
}

export default Cart;