import React from 'react'
import '../style/firstsection.css'
import image1 from '../images/strawbarre.png'
import image2 from '../images/man.png'
import image3 from '../images/orange.png'
const FirstSection = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='first'>
          <div className='firstInfo'>
            <div className="headerspan">
              <span>More than faster</span>
              <img src={image1} alt='image1'/>
            </div>
            <div className='headerInfo'>
            <h1>Groceries delivered in as little as <span className='hours'>2 hours</span></h1>
            <p>Grocen atssures fresh grocery every morning to your family without getting out in this pandemic. </p>
            </div>
            <div className='order'>
              <span className='ordernow'>Order Now</span>
              <i className='fas fa-caret-right' style={{fontSize:"30px",color:"orange"}}></i>
              <p>Order Process</p>
            </div>
          </div>
          <div className='image'>
          <div className='firstImage'>
            <img src={image2} alt="headerimage"/>
            </div>
            <div className='secondImage'>
              <div className='secImage'>
                <img src={image3} alt="smallImage"/>
              </div>
              <div className='info'>
                <h5>Fresh Orange</h5>
                <h2>$44.50</h2>
                <p>Fresh Shipping</p>
             </div> 
             <div className="cart">
             <i class='fas fa-cart-plus' style={{fontSize:"20px",color:"white"}}></i>
             </div>
             <div className='alarm'>
              <i class="fa fa-clock-o" style={{fontSize:"48px",color:"green"}}></i>
              <h5>Delivery</h5>
              <p>30 min</p>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FirstSection;
