import React from 'react'
import { womanData } from '../data/woman'

const Woman = () => {
 const firstFiveImages=womanData.slice(0,5)
  return (
    
  <><div className='proTitle'> <h2>Woman Fashion</h2>
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
export default Woman