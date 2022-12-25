import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getcarthandler } from './Action'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Loading from './Loading'
// import Button from "@material-ui/core/Button";
import { decrementQuantity, incrementQuantity } from '../cartSlice'
import { useState } from 'react'

const Cart = () => {

    
    const [data, setdata] = useState([])
    const [quantity, setquantity] = useState(1)
    const [quant, setquant] = useState('')
    const [Price1, setPrice1] = useState('')
    let { Cart, loading } = useSelector((state) => state.cart)
    console.log(Cart,loading)
    const dispatch=useDispatch()

    useEffect(() => {

        const Get=async()=>{
            await dispatch(getcarthandler())

        }
        
        // let cart=JSON.parse(localStorage.getItem("cart"))
      Get()
       
    //  get()
    var obj={
        name:"faizan",
        id:1}
        setdata([obj])
console.log(data)

   price()

        
        
    }, [])


    const get=()=>{
   
        let obj={
            name:"faizan",
            id:1}
            setdata([obj])
    console.log(data)
    }

    const price=()=>{
        // if(Cart){

        setTimeout(()=>{

            
            let Length=Cart.length
            console.log(Length)
            let Price=0
            let quantity=0
            
            for(let i=0;i<Length;i++){
                Price+=Cart[i].price
                console.log(Price)
                quantity+=Cart[i].quantity
                console.log(quantity)

                
            }
            
            setPrice1(Price)
            setquant(quantity)
            // }
            
            
        },100)
    }


    
    // let cart=JSON.parse(localStorage.getItem("cart"))


    


  return (
    <div>
        {/* {data[0].title} */}
        {/* <button onClick={get}>click</button> */}
        

        <nav className='h-14 bg-[#1976D2]'>
         
          <div className='flex flex-col  mx-4'>

        <Link to="/">
            <h1 className='text-white text-3xl my-auto font-semibold items-center '>Myntra</h1>
            </Link>
          </div>

        </nav>

        <div className='flex'>

        <div className='w-full  '>


            
          {
            loading?<Loading/>:(
                Cart && Cart.map((item)=>{
                    return(
                        <div className='h-44 w-7/12 my-8 shadow-2xl rounded-xl p-2'>
                            <div className='flex justify-between'>
                                
                        <img className='w-4/12 h-36  rounded-xl my-4' src={item.images[0]}/>

                                
                        <div className='flex flex-col '>

                            <div className='my-2 '>
                                <h1 className='text-2xl font-serif'>Price</h1>
                                <h2 className='text-2xl font-serif'>${item.price}</h2>
                            </div>

                            <div className='my-2'>
                                <h1 className='text-2xl font-serif'>Quantity</h1>
                            </div>
                                <div className='flex '>
                                    {console.log(item.id)}
                                    <button onClick={()=>{decrementQuantity(item.id)}}>-</button>
                                <h2 className='text-2xl '>{quantity}</h2>
                                    <button onClick={()=>{incrementQuantity(item.id)}}>+</button>
                                     
                                </div>


                        </div>

                            </div>

                        
                        </div>
                    )

                })
            )
          }
          

{/* 
<h1 className='text-center'>Shopping Details</h1>
{quantity}{Price1} */}



</div>


        <div className='h-80 w-96 shadow-2xl my-8 mx-1 rounded-xl p-2'>
            
<h1 className='text-center text-3xl font-serif'>Shopping Details</h1>

<div className='my-10'>


<div className='my-6'>
<div className='flex justify-between my-2 '>
    <h1 className='text-2xl font-serif'>Total Quantity</h1>

    <h1 className='text-2xl'>{quant}</h1>

</div>



<div className='flex justify-between my-2 '>
    <h1 className='text-2xl font-serif'>Total Price</h1>

    <h1 className='text-2xl'>{Price1}</h1>

</div>
</div>


<div className='flex flex-col my-24'>
    <button className=' rounded-2xl h-10 text-white bg-[#1976D2] font-serif text-xl'>Checkout</button>

</div>

</div>



   




        </div>
        </div>

          {/* <div className='h-64 w-3/5 shadow-2xl '>

            <h1 className='text-center'>Shopping Details</h1>
            {quantity}{Price1}



          </div> */}
    </div>
  )
}

export default Cart