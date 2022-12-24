import React from 'react'
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { addcarthandler, getcarthandler, getItems } from './Action';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { addToCart } from '../cartSlice';

const Cards = (props) => {
    const dispatch=useDispatch()
    const { items, loading } = useSelector((state) => state.item)
    // console.log(items,loading)
    // const [Cart, setCart] = useState([])

    const addtocarthandler=(id)=>{

        const cart=items.filter((item)=>{
            if(item.id==id)
            return items
        })
        console.log(cart)

        let Cart=cart[0]
        console.log(Cart)

        // setCart(...cart[0])

        console.log(Cart)

        
       

     

            // setCart(...CartItems)
        // }
        // console.log(Cart)
       

        // const cart1=JSON.parse(localStorage.getItem('cart'))

         dispatch(addToCart(Cart))

        


        


        
        
        
        console.log(id)

    }


  return (
    <div className='h-62  hover:md:w-80 hover: md:h-full w-36 md:w-72 shadow-2xl p-1'>
        <img src={props.image}></img>
        <div className='flex justify-center md:text-xl my-1 font-semibold'>
            {props.title}
        </div>
        <div className='flex justify-center md:text-2xl text-xl my-1 font-serif'>
            ${props.price}
        </div>
        <div className='flex justify-center my-1'>
        <Button onClick={()=>{addtocarthandler(props.id)}} variant="contained" disableElevation>
      Add to Cart
    </Button>
        </div>

    </div>
  )
}

export default Cards