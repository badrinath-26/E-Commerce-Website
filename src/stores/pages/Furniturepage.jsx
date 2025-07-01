import React, { useState } from 'react'
import { furnitureData } from '../data/furniture'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Furniturepage = () => {
  const [selectedProduct, setSelectedProduct] = useState([])

  const companyHandler = (brand) => {
    if (selectedProduct.includes(brand)) {
      setSelectedProduct(selectedProduct.filter(item => item !== brand))
    } else {
      setSelectedProduct([...selectedProduct, brand])
    }
  }

  const filteredProduct = selectedProduct.length === 0
    ? furnitureData
    : furnitureData.filter(item => selectedProduct.includes(item.brand))

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {furnitureData.map((item) => (
            <div className='pro-input'>
              <label>
                <input
                  type="checkbox"
                  checked={selectedProduct.includes(item.brand)}
                  onChange={() => companyHandler(item.brand)}
                />
                {item.brand}
              </label>
            </div>
          ))}
        </div>

        <div className="pageSection">
          {filteredProduct.map((item) => (
            <div>
              <Link to={`/furniture/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt='' />
                </div>
              </Link>
              <div className="proModel">
                {item.brand}, {item.model}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Furniturepage
