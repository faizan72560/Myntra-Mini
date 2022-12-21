import React from 'react'
import Cards from './Cards'

const arr=[
  1,3,5,8,9,0,0,
  1,3,5,8,9,0,0, 1,3,5,8,9,0,0, 1,3,5,8,9,0,0, 1,3,5,8,9,0,0, 1,3,5,8,9,0,0,1,3,5,8,9,0,0,
]

const Loading = () => {
  return (
    <div className='flex flex-wrap justify-center'>

      {
        arr.map((item)=>{
         return(
          <div className='h-62 md:h-72 w-44 md:w-72 shadow-2xl p-1 '>

          </div>
         )

        })
      }

        

    </div>
  )
}

export default Loading