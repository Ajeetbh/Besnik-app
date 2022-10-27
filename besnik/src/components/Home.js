import React from 'react'
import FirstSection from '../components/FirstSection';
import SecondSection from '../components/SecondSection';
import ThirdSection from '../components/ThirdSection';
import ForthSection from '../components/ForthSection';
import FifthSection from '../components/FifthSection';

const Home = () => {
  return (
    <div className='home'>
        <section>
            <FirstSection/>
            <SecondSection/>
            <ThirdSection/>
            <ForthSection/>
            <FifthSection/>
        </section>
    </div>
  )
}
export default Home;
