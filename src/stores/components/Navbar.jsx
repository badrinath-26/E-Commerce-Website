import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
const Navbar = () => {
    const{cartItems}=useCart()
  return (
    <>
    <div className="navsection">
    <Link to="/" className="title" style={{ textDecoration: 'none', color: 'inherit' }}>
  <h2>E-Mart</h2>
</Link>
        <div className="search">
            <input type='text' placeholder='search..'/>
        </div>
        <div className="user">
            <div className="userdetails">
                SignIN/SignUp
            </div>
            <Link to='/cart'>
            <div className="cart">
                Cart
                <span>{cartItems.length}</span>
            </div></Link>
        </div>
    </div>
    <div className='subMenu'>
        <ul>
         <li><Link to="/mobiles">Mobiles</Link></li>
            <li><Link to="/Computers">Computers</Link></li>
            <li><Link to="/Watches">Watches</Link></li>
            <li><Link to = "/Men Fashion">Men Fashion</Link></li>
            <li><Link to ="/Woman">Woman</Link></li>
            <li><Link to ="/furniture">Furniture</Link></li>
            <li><Link to ="/Ac">AC</Link></li>
            <li><Link to ="/Kitchen">Kitchen</Link></li>
            <li><Link to="/Fridge">Fridge</Link></li>
            <li><Link to="/Books">Books</Link></li>           
           <li><Link to ="/Speakers">Speakers</Link></li>
           <li><Link to ="/Tv">TV's</Link></li>
        </ul>
    </div>
    </>
  )
}

export default Navbar