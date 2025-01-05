import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <nav className='flex bg-violet-600 w-full p-5 text-white fixed'>
      <Link className='text-2xl font-bold' to={'/'}><i className="fa-solid fa-truck-fast me-1"></i>E Cart</Link>
      <ul className='flex-1 text-right'>
        <li className='list-none inline-block px-5'><input type="text" style={{width:'300px'}} className='rounded p-2' placeholder='Search Products here...'></input></li>
        <li className='list-none inline-block px-5'><Link to={'/wishlist'}><i class="fa-solid fa-heart text-red-600 me-1"></i>Wishlist <span className='bg-black text-white rounded p-1'>0</span></Link></li>
        <li className='list-none inline-block px-5'><Link to={'/cart'}><i class="fa-solid fa-cart-shopping"></i>Cart <span className='bg-black text-white rounded p-1'>0</span></Link></li>
      </ul>
    </nav>
    </>
  )
}

export default Header