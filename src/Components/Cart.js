import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getcarthandler } from './Action'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loading from './Loading'
import Button from "@material-ui/core/Button";
import { decrementQuantity, incrementQuantity } from '../cartSlice'
import { useState } from 'react'

const Cart = () => {
    const [quantity, setquantity] = useState(1)
    let { Cart, loading } = useSelector((state) => state.cart)
    console.log(Cart,loading)
    const dispatch=useDispatch()

    useEffect(() => {

        dispatch(getcarthandler())

     
    }, [])
    


  return (
    <div>

        <nav className='h-14 bg-[#1976D2]'>
         
          <div className='flex flex-col  mx-4'>

        <Link to="/">
            <h1 className='text-white text-3xl my-auto font-semibold items-center'>Myntra</h1>
            </Link>
          </div>

        </nav>


        <div className=''>


          {
            loading?<Loading/>:(
                Cart && Cart.map((item)=>{
                    return(
                        <div className='h-44 w-7/12 my-8 shadow-2xl'>
                            <div className='flex justify-between'>
                        <img className='w-4/12 h-36' src={item.images[0]}/>
                        <div className='flex flex-col '>

                            <div className='my-2'>
                                <h1 className='text-2xl'>Price</h1>
                                <h2 className='text-2xl'>${item.price}</h2>
                            </div>

                            <div className='my-2'>
                                <h1 className='text-2xl'>Quantity</h1>
                            </div>
                                <div className='flex '>
                                    {console.log(item.id)}
                                    <Button onClick={()=>{decrementQuantity(item.id)}}>-</Button>
                                <h2 className='text-2xl '>{quantity}</h2>
                                    <Button onClick={()=>{incrementQuantity(item.id)}}>+</Button>
                                     
                                </div>


                        </div>

                            </div>

                        
                        </div>
                    )

                })
            )
          }



        </div>
    </div>
  )
}

export default Cart