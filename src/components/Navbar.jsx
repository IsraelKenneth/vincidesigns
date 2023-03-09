import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { styles } from "../styles"
import { navLinks } from '../constants'
import { logo, menu, close } from '../assets'

const Navbar = () => {
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <Link to='/' className='flex items-center gap-2' onClick={() => {
        setActive(""); window.scrollTo(0, 0);
      }}>
        <img src={logo} alt='logo' className='w-2 h-2 object-contain' />
        <p className='text-white text-[18px] font-bold cursor-pointer'>Vinci <span className='sm:block hidden
      '>| Designs</span></p>
      </Link>
      <p className='text-red-500 '>asdsa</p>

    </nav>
  )
}

export default Navbar