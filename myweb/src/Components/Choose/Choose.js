import React from 'react';
import './Choose.css';
import Services from '../../Image/ecommerce.png';

const Choose = () => {
  return (
    <div className='choosecontainer' id='chooseus'>
    <div className='chooseleft'>
        <div className='chooseimage'>
            <img src={Services} style={{width:"80%"}} alt='Services'/>
        </div>
    </div>
    <div className='chooseright'>
        <div className='choosetitle'>
        <b>We</b> Serve 
             <br />
        <b>Why</b> Choose Us
        </div>
        <div className='choosesubtitle'>
          Customizable, Reliable Ready to start Websites
        </div>
        <div className='choosedesc'>
        If you want to make more money in business and create a different identity in the world of your business, you must contact one at a time, an experienced team is waiting for you, to make your dreams come true.
        </div>
        <div className='intro-title'>
                       <div className='intro-title-wrapper'>
                           <div className='intro-title-item'>
                              Customizable Themes
                           </div>
                           <div className='intro-title-item'>
                           Agile Web Development
                           </div>
                           <div className='intro-title-item'>
                           Fresh Content
                           </div>
                           <div className='intro-title-item'>
                           SEO Friendly Websites
                           </div>
                           <div className='intro-title-item'>
                           Secured Websites
                           </div>
                           <div className='intro-title-item'>
                           Free Updates & Support
                           </div>
                           <div className='intro-title-item'>
                           Optimized websites
                           </div>
                           <div className='intro-title-item'>
                           Google Analytics
                           </div>
                           <div className='intro-title-item'>
                           Bugs free Websites
                           </div>
                           <div className='intro-title-item'>
                           Elegant Websites
                           </div>
                           <div className='intro-title-item'>
                           Optimized websites
                           </div>
                       </div>
                   </div>
        <div className='choosedesc'>
          <ul>
              <li>Our team provides Free Updates & 24*7 support to our clients.</li>
              <li>Our CMS based solution helps you update your website content easily.</li>
              <li>We provide fast loading Websites which helps your customer to impress.</li>
              <li>Our Solution helps you to create your website ready in few days.</li>
              <li>100% bugs and errors free which will help your business running 24 hours.</li>
              <li>We develop SEO friendly web pages with proper Html 5 tags Validation.</li>
          </ul>
        </div>
    </div>
    
</div>
  )
}

export default Choose