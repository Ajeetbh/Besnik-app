import React from 'react';
import '../style/thirdsection.css'
import image4 from '../images/girl.png'
import image5 from '../images/strawbarre2.png'

const ThirdSection = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='third'>
                <div className='thirdImage'>
                    <div className='first'>
                      <img src={image4} alt='thirdImage'/>
                    </div>
                    <div className='second'>
                      <h5>Melting Cheese</h5>
                      <p>Red Stovery</p>
                      <div className='secImage'>
                        <img src={image5} alt="image6"/>
                      </div>  
                      <div className='secondInfo'>
                      <i className='fa fa-star icon1' style={{color: '#f3da35',fontSize:"1.2rem"}}></i> 
                      <p>3.8</p>
                      <h5>$49.66</h5>
                      <i className="fa fa-plus icon2" style={{color:"white",paddingTop:".5rem"}}></i>
                      </div>
                    </div>
                </div>
                <div className='thirdInfo'>
                    <h5>WHY CHOOSE US</h5>
                    <h1>Find Favorites And Discover New Ones</h1>
                    <p>At Vero eos et accusamus et iusto odio disnissimos ducimus blanditiis praesen voluptatum deleniti.</p>
                    <span>Explore Now</span>
                </div>
            </div>
        </div>
    </div>
  )
}
export default ThirdSection;