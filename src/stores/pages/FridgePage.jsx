import React, { useState } from 'react'
import { fridgeData } from '../data/fridge' 
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const FridgePage = () => {
  const [selectedBrands, setSelectedBrands] = useState([])

  const brandHandler = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    )
  }

  const filteredProducts = selectedBrands.length === 0
    ? fridgeData
    : fridgeData.filter(item => selectedBrands.includes(item.brand))

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {Array.from(new Set(fridgeData.map(item => item.brand))).map((brand, index) => (
            <div className='pro-input' key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => brandHandler(brand)}
                />
                {brand}
              </label>
            </div>
          ))}
        </div>
        <div className="pageSection">
          {filteredProducts.map(item => (
            <div key={item.id}>
              <Link to={`/fridge/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt={item.model} />
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

export default FridgePage
