import React, { useState } from 'react'
import { computerData } from '../data/computers'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const ComputerPage = () => {
  const [selectedProduct, setSelectedProduct] = useState([])

  const companyHandler = (mango) => {
    if (selectedProduct.includes(mango)) {
      setSelectedProduct(selectedProduct.filter(item => item !== mango))
    } else {
      setSelectedProduct([...selectedProduct, mango])
    }
  }

  const filteredProduct = selectedProduct.length === 0
    ? computerData
    : computerData.filter((orange) => selectedProduct.includes(orange.company))

  return (
    <>
      <Navbar />
      <div className="fullpage">
        <div className="pro-selected">
          {computerData.map((comp) => {
            return (
              <div className='pro-input'>
                <label>
                  <input
                    type="checkbox"
                    checked={selectedProduct.includes(comp.company)}
                    onChange={() => companyHandler(comp.company)}
                  />
                  {comp.company}
                </label>
              </div>
            )
          })}
        </div>
        <div className='pageSection'>
          {
            filteredProduct.map((item) => {
              return (
                <div>
                  <Link to={`/computers/${item.id}`}>
                    <div className="pageImg">
                      <img src={item.image} alt='' />
                    </div>
                  </Link>
                  <div className="proModel">
                    {item.company}, {item.model}
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

export default ComputerPage
