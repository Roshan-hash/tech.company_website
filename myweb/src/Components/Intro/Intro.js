import React from 'react'
import './Into.css';
import IntroImage from '../../Image/plane.png';


const Intro = () => {
  return (
    <div className='Introcontainer'  id='home'>
    <div className='IntroLeft'>
        <div className='introtitle'>
            Lets Build your vision in Reality
        </div>
        <div className='introDesc'>
          We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.We believe that designing products and services in close partnership
          with our clients is the only way to have a real impact on their
          business.
        </div>
        <div className='Introinfo'>
            <div className='introButton'>START A  PROJECT</div>
            <div className='introContact'>
                <div className='phone'>Call Us +91 83292 57610</div>
                <div className='contacttext'>For any question or concern</div>
            </div>
        </div>
    </div>
    <div className='Introright'>
        <div className='Image'>
            <img src={IntroImage} alt='' style={{width:"90%" }} />
        </div>
    </div>
    
</div>
  )
}

export default Intro