import React from 'react'
import '../style/fifthsection.css'

const FifthSection = () => {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='five'>
                <div className='fiveImage'>
                    <img src="https://c8.alamy.com/zooms/6/e6c979525ade40e98458882a0763ef51/2akxgxf.jpg" alt="images1"/>
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
