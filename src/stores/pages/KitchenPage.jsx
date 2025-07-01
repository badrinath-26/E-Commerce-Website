import React, { useState } from 'react'
import { kitchenData } from '../data/kitchen'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const KitchenPage = () => {
  const [selectedBrand, setSelectedBrand] = useState([])

  const brandHandler = (brand) => {
    if (selectedBrand.includes(brand)) {
      setSelectedBrand(selectedBrand.filter(item => item !== brand))
    } else {
      setSelectedBrand([...selectedBrand, brand])
    }
  }

  const filteredProducts = selectedBrand.length === 0
    ? kitchenData
    : kitchenData.filter(item => selectedBrand.includes(item.brand))

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {kitchenData.map((item, index) => (
            <div className='pro-input' key={index}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedBrand.includes(item.brand)}
                  onChange={() => brandHandler(item.brand)}
                />
                {item.brand}
              </label>
            </div>
          ))}
        </div>
        <div className="pageSection">
          {filteredProducts.map(item => (
            <div key={item.id}>
              <Link to={`/kitchen/${item.id}`}>
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

export default KitchenPage
