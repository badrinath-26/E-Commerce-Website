import React, { useState } from 'react'
import { watchData } from '../data/watch'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Watchespage = () => {
  const [selectedProduct, setSelectedProduct] = useState([])

  const companyHandler = (mango) => {
    if (selectedProduct.includes(mango)) {
      setSelectedProduct(selectedProduct.filter(item => item !== mango))
    } else {
      setSelectedProduct([...selectedProduct, mango])
    }
  }

  const filteredProduct = selectedProduct.length === 0
    ? watchData
    : watchData.filter((item) => selectedProduct.includes(item.brand))

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {watchData.map((watch) => {
            return (
              <div className="pro-input">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(watch.brand)}
                    onChange={() => companyHandler(watch.brand)}
                  />
                  {watch.brand}
                </label>
              </div>
            )
          })}
        </div>
        <div className="pageSection">
          {filteredProduct.map((item) => {
            return (
              <div>
                <Link to={`/watches/${item.id}`}>
                  <div className="pageImg">
                    <img src={item.image} alt="" />
                  </div>
                </Link>
                <div className="proModel">
                  {item.brand}, {item.model}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Watchespage
