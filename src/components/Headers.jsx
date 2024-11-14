import React from 'react'
import { assets } from './assets/assets/assets';

const Headers = () => {
  return (
    <div className='flex col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>
      {/*--------left side --------- */}
      <div>
        <p>Book Appointment<br/>  With Trusted Doctors</p>
        <div>
            <img src={assets.group_profiles} alt=''/> 
            <p>Simply browse through our extensive list of trusted doctors,<br/>
            schedule your appointment hassle-free.</p>
        </div>
<a href=''>Book appointment
    <img src = {assets.arrow_icon} alt=''/>
</a>

      </div>

     { /********Right side   ******/ }
      <div>
        <img src={assets.header_img}/>

      </div>
 
      </div>





  )
}

export default Headers
