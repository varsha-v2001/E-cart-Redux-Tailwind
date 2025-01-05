import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <>
      <Header />
      <div className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 items-center h-screen'>
          <img width={'450px'} height={"200px"} src="https://img.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg?semt=ais_hybrid" alt="" />
          <div>
            <h3 className='font-bold mb-3'>PID : id</h3>
            <h1 className='text-5xl font-bold mb-3'>Product name</h1>
            <h4 className='font-bold text-red-600 text-2xl mb-3'>$ 250</h4>
            <h4 className='mb-3'>Brand: brand</h4>
            <h4 className='mb-3'>Category: category</h4>
            <p>
              <span className='font-bold'>Description </span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem culpa optio repudiandae voluptas, omnis labore tempore rerum sint fuga corporis mollitia nesciunt facere perferendis cupiditate iste in, corrupti qui exercitationem.
            </p>
            <div className='flex justify-between mt-5'>
              <button className='bg-blue-600 text-white p-2'>Add to Wishlist</button>
              <button className='bg-green-600 text-white p-2'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default View