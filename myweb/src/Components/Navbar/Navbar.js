import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='Container'>
            <div className='Wrapper'>
                <div className='Left'>
                    <div className='Logo'>
                       tech.
                    </div>
                <div className='Menu'>
                    <div className='Menuitem'>
                        <a href='#home' style={{color: "black"}} >Home</a>
                    </div>
                    <div className='Menuitem'>
                        <a href='#features' style={{textDecoration:"none"}}>Features</a>
                    </div>
                    <div className='Menuitem'>
                        <a href='#services' style={{textDecoration:"none"}}>Services</a>
                    </div>
                    <div className='Menuitem'>
                        <a href='#products'style={{textDecoration:"none"}}>Products</a>
                    </div>
                    <div className='Menuitem'>
                        <a href='#pricing' style={{textDecoration:"none"}}>Pricing</a>
                    </div>
                    <div className='Menuitem'>
                        <a href='#team' style={{textDecoration:"none"}}>Team</a>
                    </div>
                    <div className='Menuitem'>
                        <a href='#contact' style={{textDecoration:"none"}}>Contact</a>
                    </div>
                </div>
             </div>
             <div className='Button'>
                <a href='#contact' style={{textDecoration: 'none', color: 'white'}} >JOIN NOW</a>
             </div>
            </div>
        </div>
  )
}

export default Navbar