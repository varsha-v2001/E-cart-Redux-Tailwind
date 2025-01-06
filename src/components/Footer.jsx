import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <>
      <div style={{ height: "250px", marginTop: '100px' }} className='mt-5 w-full bg-violet-600 text-white p-4'>
        <div className='flex justify-between p-5'>
          <div style={{ width: "400px" }} className='intro'>
            <h5 className='text-xl font-bold mb-2'><i className="fa-solid fa-truck-fast me-2"></i>E Cart</h5>
            <p className='text-sm'>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
            <p className='text-sm'>Code licensed Luminar, docs CC BY 3.0.</p>
            <p className='text-sm'>Currently v5.3.2.</p>
          </div>
          <div className='flex flex-col'>
            <h5 className='text-xl font-bold mb-2'>Links</h5>
            <Link to={'/'} style={{ textDecoration: 'none' }}>Landing Page</Link>
            <Link to={'/wishlist'} style={{ textDecoration: 'none' }}>Wishlist</Link>
            <Link to={'/cart'} style={{ textDecoration: 'none' }}>Cart</Link>
          </div>
          <div className='flex flex-col'>
            <h5 className='text-xl font-bold mb-2'>Guides</h5>
            <a href="https://react.dev/" style={{ textDecoration: 'none', color: 'white' }} target="_blank">React</a>
            <a href="https://react-bootstrap.netlify.app/" style={{ textDecoration: 'none', color: 'white' }} target="_blank">React Bootstrap</a>
            <a href="https://www.npmjs.com/package/react-router-dom" style={{ textDecoration: 'none', color: 'white' }} target="_blank">React Router</a>
          </div>
          <div className='flex flex-col'>
            <h5 className='text-xl font-bold mb-2'>Contact Us</h5>
            <div className="flex">
              <input type="text" placeholder='Enter your email here..' className='rounded p-1' />
              <button className='btn btn-info ms-2'><i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="flex justify-between mt-4">
              <a href="https://en.wikipedia.org/wiki/Twitter" style={{ textDecoration: 'none', color: 'white' }} target="_blank"><i className="fa-brands fa-twitter"></i></a>
              <a href="https://www.instagram.com/" style={{ textDecoration: 'none', color: 'white' }} target="_blank"><i className="fa-brands fa-instagram"></i></a>
              <a href="https://www.facebook.com/" style={{ textDecoration: 'none', color: 'white' }} target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="https://www.linkedin.com" style={{ textDecoration: 'none', color: 'white' }} target="_blank"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/" style={{ textDecoration: 'none', color: 'white' }} target="_blank"><i className="fa-brands fa-github"></i></a>
              <a href="https://github.com/" style={{ textDecoration: 'none', color: 'white' }} target="_blank"><i className="fa-solid fa-phone"></i></a>
            </div>
          </div>
        </div>
        <p className='mt-4 text-center text-sm'>Copyright &copy; Jan 2024 Batch, Media Player. Built with React.</p>
      </div>
    </>
  )
}

export default Footer