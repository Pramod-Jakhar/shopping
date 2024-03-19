import React from 'react'
import Breadcrumb from './Breadcrumb';
import Productlist from '../Product/Productlist';
import '../Layout/Header/Style.css'

const Wishlist = () => {
  return (  
    <div>
      <Breadcrumb/>
       <h4 className='h4'>Your Wishlist</h4>
      <Productlist/>
    </div>
  )
}

export default Wishlist;