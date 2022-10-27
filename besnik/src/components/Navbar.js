import React from 'react'
import '../style/navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='container'>
       <div className='row'>
       <div className='navbar'>
        <div className='logo'>
           <Link to='/'>
           <img src="https://www.designfreelogoonline.com/wp-content/uploads/2019/09/00677-APPLE-03.png" alt="logo"/>
            <h2 style={{color:"black"}}>Besnik</h2> 
           </Link>
        </div>
        <div className='link'>
        <ul>
            <Link to="/" style={{color:"rgb(235, 106, 106)"}}>Home</Link>
            <Link to="/menu">Menu</Link>
            <Link to="/service">Service</Link>
            <Link to="/shop">Shop</Link>
        </ul>
        </div>
        <div className='search-box'>
            <Link><i className="fa fa-search icon-search" style={{fontSize:"16px",color:"gray"}}></i></Link>
            <input type="search" placeholder='Search'/>
            <span className='line'>|</span>
            <div className='cart'>
            <i class="fa fa-shopping-bag" aria-hidden="true"></i>
            <p className='num'>3</p>
            </div>
        </div>
        </div>
       </div>
    </div>
  )
}
export default Navbar;
