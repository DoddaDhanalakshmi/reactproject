import React from 'react'
import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";

const Catogories = [
    {
        id:1,
        name:"All",
        image:<TiThSmallOutline  className='w-[60px] h-[60px]' />
    },
    {
        id:2,
        name:"Breakfast",
        image:<MdOutlineFreeBreakfast  className='w-[60px] h-[60px]'/>
    },
    {
        id:3,
        name:"Soups",
        image:<TbSoup  className='w-[60px] h-[60px]'/>
    },
    {
        id:4,
        name:"Pasta",
        image:<CiBowlNoodles  className='w-[60px] h-[60px]'/>
    },
    {
        id:5,
        name:"MainCourse",
        image:<MdOutlineFoodBank className='w-[60px] h-[60px]'/>
    },
    {
        id:6,
        name:"Pizza",
        image:<GiFullPizza  className='w-[60px] h-[60px]' />
    },
    {
        id:7,
        name:"Burger",
        image:<GiHamburger  className='w-[60px] h-[60px]' />
    },
]

export default Catogories