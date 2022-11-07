import React from 'react'
import '../style/forthsection.css'
import image6 from '../images/man2.png'


const ForthSection = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='forth'>
                <div className='forthInfo'>
                    <h5>HOME DELIVERY</h5>
                    <h1>Sit At Home We Will Take Care Your Order</h1>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volupatatum deleniti atque corrupti quos.</p>  
                    <span>Explore Now</span>
                </div>
                <div className='forthImage'>
                    <div className='man'>
                        <img src={image6} alt="image1"/>
                    </div>
                    <div className='second'>
                        <div className='bike'>
                        <img src="https://www.pngitem.com/pimgs/m/3-37779_transparent-delivery-png-delivery-boy-with-bike-png.png" alt="bike"/>
                        </div>
                        <h5>Bike Delivery</h5>
                        <span>Bicycle service assures that your packages arrive quickly.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default ForthSection;
