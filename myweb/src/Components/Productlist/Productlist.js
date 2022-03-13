import React from 'react';
import './Productlist.css';
import Product from '../Product/Product';

import site1 from '../../Image/siteimage_7.jpg';
import site2 from '../../Image/siteimage_1.jpg';
import site3 from '../../Image/Siteimage_2.jpg';
import site4 from '../../Image/siteimage_4.jpg';
import site5 from '../../Image/siteimage_6.jpg';
import site6 from '../../Image/siteimage_5.jpg';

const Productlist = () => {
  return (
    <div className='productlist' id="products">
            <div className='productlist-text'>
                <h1 className='productlist-title'>Create & Inspire</h1>
                <p className='productlist-desc'>
                Our Solution helps you to create your website ready in few days.
                </p>
            </div>
            <div className='product-list'>
                <Product img={site1}></Product>
                <Product img={site2}></Product>
                <Product img={site3}></Product>
                <Product img={site4}></Product>
                <Product img={site5}></Product>
                <Product img={site6}></Product>
            </div>
        </div>
  )
}

export default Productlist