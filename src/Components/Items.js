import React from 'react'

import { useDispatch } from 'react-redux'
import { getItems } from './Action'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import Loading from './Loading'
import Cards from './Cards'
import { useState } from 'react'

const Items = () => {
    
    const { items, loading } = useSelector((state) => state.item)
    console.log(items,loading)
    const dispatch=useDispatch()

    useEffect(() => {
       
        dispatch(getItems())
       

     
    }, [])
    
  return (
    <div>
         <div className='flex flex-wrap justify-center'>
            {
                loading?(
                    <Loading/>
                ):items&&items.map((item,index)=>{
                    return(
                    // <div key={index}>
                        <Cards  image={item.images[1]} title={item.title} price={item.price} id={item.id} key={index} />
                        
                    
                    
                    // </div>

                    )
                    
                })
            }


        </div>
 

    </div>
  )
}

export default Items