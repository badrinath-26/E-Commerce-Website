import React, { useState } from 'react'
import { acData } from '../data/ac'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const ACPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([])

  const companyHandler = (company) => {
    if (selectedProduct.includes(company)) {
      setSelectedProduct(selectedProduct.filter(item => item !== company))
    } else {
      setSelectedProduct([...selectedProduct, company])
    }
  }

  const filteredProduct = selectedProduct.length === 0
    ? acData
    : acData.filter(item => selectedProduct.includes(item.company))

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {acData.map((item) => (
            <div className='pro-input'>
              <label>
                <input
                  type="checkbox"
                  checked={selectedProduct.includes(item.company)}
                  onChange={() => companyHandler(item.company)}
                />
                {item.company}
              </label>
            </div>
          ))}
        </div>

        <div className="pageSection">
          {filteredProduct.map((item) => (
            <div>
              <Link to={`/ac/${item.id}`}>
                <div className="pageImg">
                  <img src={item.image} alt='' />
                </div>
              </Link>
              <div className="proModel">
                {item.company}, {item.model}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ACPage
