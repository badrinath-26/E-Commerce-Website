import React from 'react'
import { acData } from '../data/ac'

const AC = () => {
   const firstFiveImages=acData.slice(0,5)
  
    return (
      <><div className='proTitle'> <h2>AC</h2>
      </div>
     
      <div className='proSection'>
          {firstFiveImages.map((item)=>{
                 return(
                  <div className='imgBox'>
                      <img className='proImage' src={item.image}/>
                  </div>
                 )
              
          })
        }
      </div>
    </>  
    )
  }
  
export default AC