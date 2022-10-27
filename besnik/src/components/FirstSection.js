import React from 'react'
import '../style/firstsection.css'
const FirstSection = () => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='first'>
          <div className='firstInfo'>
            <div className="headerspan">
              <span>More than faster</span>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRovbcYQxuCz5Dmvpr6jaFbd2Q2OvZgODpl1g&usqp=CAU" alt='image1'/>
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
            <img src="https://media.istockphoto.com/photos/courier-picture-id1321175276?k=20&m=1321175276&s=612x612&w=0&h=jPwXn3k3LlJhBqOzoVz6FTGEQhPemEZinf67Cyk0Q-g=" alt="headerimage"/>
            </div>
            <div className='secondImage'>
              <div className='secImage'>
                <img src="https://media.istockphoto.com/photos/orange-isolated-on-white-background-clipping-path-full-depth-of-field-picture-id1194662606?k=20&m=1194662606&s=612x612&w=0&h=Q3bHkLexn71hPlUJQSPhazlJiL-xpeVGwOAFwO67WcU=" alt="smallImage"/>
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
