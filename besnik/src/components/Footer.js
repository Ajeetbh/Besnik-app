import React from 'react'
import '../style/footer.css'

const Footer = () => {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='footer'>
          <div className='footer1'>
            <div className='fooFirst'>
              <img src="https://www.designfreelogoonline.com/wp-content/uploads/2019/09/00677-APPLE-03.png" alt="footer"/> 
              <h2>Besnik</h2>
              <p>Fast delivery, which is active all over the world, serves with many transportation vehicles.</p>
            </div>
            <div className='fooSecond'>
              <h4>Company</h4>
              <li>About Us</li>
              <li>Blog</li>
              <li>All Products</li>
              <li>Locations Map</li>
            </div>
            <div className='fooThird'>
              <h4>Services</h4>
              <li>Order tracking</li>
              <li>Wish List</li>
              <li>My account</li>
              <li>Terms & Conditions</li>
            </div>
            <div className='fooForth'>
              <h4>Get in Touch</h4>
              <p>Subscribe to our weekly Newsletter and receive updates via email.</p>
            </div>
          </div>

          <hr/>
          <div className='footer2'>
            <div>
              <p>All Rights Reserved @BESINK 2022</p>
            </div>
            <div>
              <p>Term & Conditions &emsp;&emsp; Privacy & Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer;
