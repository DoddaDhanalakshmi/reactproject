// import React from 'react';
// import { useSelector } from 'react-redux';
// import Cart from './Cart'; 

// const CartPage = () => {
//     // Check your store setup. If your slice is named 'cart', 
//     // you might need state.cart.items or state.cart
//     const cartItems = useSelector(state => state.cart);
//     console.log(cartItems,"kjsdfdsf")

//     return (
//         <div className='w-full min-h-screen pt-[120px] flex flex-col items-center bg-gray-50'>
//             <h1 className='text-3xl font-bold mb-8'>Your Shopping Cart</h1>
            
//             {cartItems && cartItems.length > 0 ? (
//                 cartItems.map((item, index) => (
//                     // Use index as a fallback key if id is missing
//                     // Use {...item} to pass EVERYTHING at once
//                     <Cart key={item.id || index} {...item} />
//                 ))
//             ) : (
//                 <p className='text-xl text-gray-500'>Your cart is empty!</p>
//             )}
//         </div>
//     );
// };

// export default CartPage;