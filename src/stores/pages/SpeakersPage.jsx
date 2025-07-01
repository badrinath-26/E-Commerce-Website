import React, { useState } from 'react'
import { speakerData } from '../data/speaker'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const SpeakerPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([])

  const companyHandler = (mango) => {
    if (selectedProduct.includes(mango)) {
      setSelectedProduct(selectedProduct.filter(item => item !== mango))
    } else {
      setSelectedProduct([...selectedProduct, mango])
    }
  }

  const filteredProduct = selectedProduct.length === 0
    ? speakerData
    : speakerData.filter((orange) => selectedProduct.includes(orange.brand))

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {
            // show unique brands
            [...new Set(speakerData.map(phone => phone.brand))].map((brand, index) => (
              <div className='pro-input' key={index}>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(brand)}
                    onChange={() => companyHandler(brand)}
                  />
                  {brand}
                </label>
              </div>
            ))
          }
        </div>
        <div className='pageSection'>
          {
            filteredProduct.map((item) => {
              return (
                <div key={item.id}>
                  <Link to={`/speaker/${item.id}`}>
                    <div className="pageImg">
                      <img src={`/${item.image}`} alt='' />
                    </div>
                  </Link>
                  <div className="proModel">
                    {item.brand}, {item.model}
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default SpeakerPage
