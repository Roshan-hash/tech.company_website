import React from 'react'
import './Features.css';
import Advertise from '../../Image/grow.png';


const Features = () => {
  return (
    <div className='featcontainer' id='features'>
    <div className='featleft'>
        <div className='featimage'>
            <img src={Advertise} alt='Advertising' style={{width: "200%"}}/>
        </div>
    </div>
    <div className='featright'>
        <div className='feattitle'>
        <b>Good</b> Advertisment 
             <br />
        <b>Good</b> Business
        </div>
        <div className='featsubtitle'>
         We know that good advertisment means good business.
        </div>
        <div className='featdesc'>
          We help our clients succeed by creating brand identities, digital
          experiences, and print materials that communicate clearly, achieve
          marketing goals, and look fantastic.
        </div>
        <div className='featdesc'>
          We care your business and guarantee you to achieve marketing goals.
        </div>
        <div className='featbutton'>
            Learn More
        </div>
    </div>
    
</div>
  )
}

export default Features