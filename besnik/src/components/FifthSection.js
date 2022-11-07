import React from 'react'
import '../style/fifthsection.css'
import image7 from '../images/phone.png'

const FifthSection = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='five'>
                <div className='fiveImage'>
                    <img src={image7} alt="images1"/>
                </div>
                <div className='fiveInfo'>
                    <div className='information'>
                        <h5>Download our app</h5>
                        <h1>Get The Groceries App Order More Easily.</h1>
                        <p>Lorem ipsum dolor sit amet consectetue adipiscing elit set do tempor incididunt ut.</p>
                    </div>
                    <div className='app'>
                        <div className='appStore'>
                        <i className="fa-brands fa-apple"></i>
                        <h4>App Store</h4>
                        </div>
                        <div className='playStore'>
                        <i className="fa-brands fa-google-play"></i>
                        <h4>Play Store</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default FifthSection;
