import React from 'react'
import '../style/secondsection.css'


const SecondSection = () => {
  return (
    <div className='container-fliud'>
        <div className='row'>
            <div className='second'>
                <div className='secondInfo1'>
                    <p>What we Serve</p>
                    <h1>Fruit And Vegetable Delivered To Your Home</h1>
                </div>
                <div className='secondProp'>
                    <div className='col1'>
                        <i class="fa fa-truck" style={{fontSize:"70px",color:"rgb(243, 63, 63)"}}></i> 
                        <h3>Free shipping</h3>
                        <p>Enjoy Order in a hand using the fresness of groceries</p>
                    </div>
                    <div className='col1' id='days'>
                        <i className="fas fa-hand-holding-usd" style={{fontSize:"70px",color:"rgb(243, 63, 63)"}}></i>
                        <h3>15 days returns</h3>
                        <p>Order in a handy way using the freshness of the groceries.</p>
                    </div>
                    <div className='col1'>
                        <i className="fas fa-user-lock" style={{fontSize:"70px",color:"rgb(243, 63, 63)"}}></i>
                        <h3>Secure Checkout</h3>
                        <p>If you get rotten items-return immediately to us.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default SecondSection;
