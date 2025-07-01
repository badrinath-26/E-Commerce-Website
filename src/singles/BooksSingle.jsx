import React from 'react'
import { useParams } from 'react-router-dom' 
import { booksData } from '../stores/data/books'
import Navbar from '../stores/components/Navbar'
import { useCart } from '../stores/context/CartContext' 

const BooksSingle = () => {
  const { id } = useParams()
  const { addToCart } = useCart()

  const book = booksData.find(item => item.id === id)

  if (!book) return <div>Book not found.</div>

  return (
    <>
      <Navbar />
      <div className="ind-section">
        <div className="ind-img">
          <img src={`/${book.image}`} alt={book.title} />
        </div>
        <div className="ind-details space">
          <div className="ind-company">
            <h2>{book.title}</h2>
          </div>
          <div className="ind-model space">
            <h3>{book.author}</h3>
          </div>
          <div className='ind-price space'>
            <h2>${book.price}</h2>
          </div>
          <div className="ind-desc space">
            <p>{book.description}</p>
          </div>
          <button onClick={() => addToCart(book)}>Add to Cart</button>
        </div>
      </div>
    </>
  )
}

export default BooksSingle
