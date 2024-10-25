import React from 'react'
import { NavLink } from 'react-router-dom'
import {assets} from "../assets/assets"

const Navbar = () => {
  return (

    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b-2 border-b-gray-400'>

      <img src={assets.admin_logo} alt="" />
      <ul>
        <NavLink>
          <li>HOME </li>
          <hr/>
        </NavLink>

        <NavLink>
          <li>ALL DOCTORS </li>
          <hr/>
        </NavLink>

        <NavLink>
          <li>ABOUT </li>
          <hr/>
        </NavLink>


        <NavLink>
          <li>CONTACT </li>
          <hr/>
        </NavLink>
      </ul>
      <div>
        <button>Create Account</button>

      </div>
    </div>
  )
}

export default Navbar
