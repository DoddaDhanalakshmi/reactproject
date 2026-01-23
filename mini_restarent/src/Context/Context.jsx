import React, { createContext, useState } from 'react'
import { food_items } from '../Food'
export const DataContext=createContext()
const Context = ({children}) => {
    let [category,setcatgory]=useState(food_items)
    let [input,setinput]=useState("")
    let data={
input,
setinput,
category,
setcatgory
    }
  return (
   <DataContext value={data}>
     {children}
   </DataContext>
  )
}

export default Context