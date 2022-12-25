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
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';


const Items = () => {
    const { Alrt } = useSelector((state) => state.alert)
    console.log(Alrt)

    
    let { items, loading } = useSelector((state) => state.item)
    console.log(items,loading)
    const dispatch=useDispatch()

    const [data, setdata] = useState([])
    const [itemsperpage, setitemsperpage] = useState(19)
    const [currentpage, setcurrentpage] = useState(1)
    const indexoflastpost=currentpage*itemsperpage
    if(items){

        items=items.slice(currentpage,indexoflastpost)
    }



    useEffect(() => {
        const get=async()=>{

            const indexoflastpost=currentpage*itemsperpage
            await dispatch(getItems(currentpage,indexoflastpost))

            // items=items.slice(currentpage,indexoflastpost)
        }

        get()


        setdata(items)
        console.log(data)

        if(items){

            
            const indexoflastpost=currentpage*itemsperpage
            items=items.slice(currentpage,indexoflastpost)
        }


      
       
        
       

     
    }, [currentpage])

const handleChange = (event, value) => {
    setcurrentpage(value);
  };
    
  return (
    <div>
         <div className='flex flex-wrap justify-center gap-1'>
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

        <div className='flex justify-center shadow-2xl my-5'>


        {/* <Stack spacing={2}> */}
        {/* {console.log(items.length)} */}
      
      <Pagination count={currentpage+1} page={currentpage} variant="outlined" shape="rounded" onChange={handleChange} />
    {/* </Stack> */}
        </div>
 

    </div>
  )
}

export default Items