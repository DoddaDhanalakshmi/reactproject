import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: []
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    Additem: (state, action) => {
      const existing_item=state.cart.find((item)=>item.id===action.payload.id)
      if(existing_item){
        existing_item.qty+=1
      }
      else{

      
      state.cart.push(action.payload)  
    }
  },
  Removeitem: (state, action) => {

      state.cart = state.cart.filter((item) => item.id !== action.payload);
      
    },
    Incremetquantity:(state,action)=>{
      const item= state.cart.find((item) => item.id == action.payload);
      if(item){
        item.qty+=1
      }
    },
    Decrementquantity:(state,action)=>{
      const item= state.cart.find((item) => item.id == action.payload);
      if(item){ 
        if(item.qty>1){
        item.qty-=1
       
      }
      else{
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
    }
      
      
    }
  },
})

export const { Additem,Removeitem,Incremetquantity,Decrementquantity} = CartSlice.actions
export default CartSlice.reducer
