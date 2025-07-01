import React from 'react'

import { speakerData } from '../stores/data/speaker'
import { useParams } from 'react-router-dom'
import Navbar from '../stores/components/Navbar'
import { useCart } from '../stores/context/CartContext'

const SpeakerSingle = () => {
  const { id } = useParams()
  const { addToCart, cartItems } = useCart()

  const product = speakerData.find(item => item.id === id)

  if (!product) {
    return <h2>Speaker Not Found</h2>
  }

  return (
    <>
      <Navbar />
      <div className="ind-section">
        <div className="ind-img">
          <img src={`/${product.image}`} alt={product.model} />
        </div>
        <div className="ind-details space">
          <div className="ind-company">
            <h2>{product.brand}</h2>
          </div>
          <div className="ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className='ind-price space'>
            <h2>{product.price}</h2>
          </div>
          <div className="ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default SpeakerSingle
