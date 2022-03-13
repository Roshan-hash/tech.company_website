import React from 'react'
import './Services.css';
import ServImage from '../../Image/target.png';
import UX from '../../Image/ux.png';
import SEO from '../../Image/seo.png';
import Shopping from '../../Image/shopping.png';
import Support from '../../Image/support.png';
import Teamwork from '../../Image/teamwork.png';
import WebDesign from '../../Image/web-design.png';

const Services = () => {
  return (
    <div className='servcontainer'  id='services'>
    <div className='servleft'>
        <div className='servwrapper'>
            <div className='servtitle'>
                <h1>Simple process to start</h1>
            </div>
            <div className='servdesc'>
                We provide digital experience services to startups and small
                 businesses to looking for a partner of their digital media, design &
                 development, lead generation and communications requirents. We work
                  with you, not for you. Although we have a great resources.
                  <b>Tech. </b>is a group of professional Website Designers & Developers, Software Developers and SEO Experts. 
                  We provide awesome Web Designing Services and SEO Services.
            </div>
            <div className='servminicardcontainer'>
            <div className='servcardcontainer'>
                <div className='servminicard'>
                   <img src={WebDesign} className='servcardimage' alt=''/>
                   <p className='servcardtitle'>Web Design & Development</p>
                </div>
                <div className='servminicard'>
                   <img className='servcardimage' src={SEO} alt=''/>
                   <p className='servcardtitle'>Digital Marketing & SEO</p>
                </div>
                <div className='servminicard'>
                   <img className='servcardimage' src={UX} alt=''/>
                   <p className='servcardtitle'>Graphics Design Services</p>
                </div>
            </div>
            <div className='servcardcontainer'>
                <div className='servminicard'>
                   <img src={Shopping} className='servcardimage' alt=''/>
                   <p className='servcardtitle'>E-commerce website</p>
                </div>
                <div className='servminicard'>
                   <img className='servcardimage' src={Support} alt=''/>
                   <p className='servcardtitle'>Advisory and Professional</p>
                </div>
                <div className='servminicard'>
                   <img className='servcardimage' src={Teamwork} alt=''/>
                   <p className='servcardtitle'>24*7 Customer Service On call</p>
                </div>
            </div>
            </div>              
        </div>
    </div>

    <div className='servright'>
        <div className='servimage'>
            <img src={ServImage} alt='thetech_Serviceimg' style={{width:"100%"}} />
        </div>
    </div>
    
</div>
  )
}

export default Services