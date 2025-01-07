import React, { useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const View = () => {

  const [product, setProduct] = useState({})

  const { id } = useParams()
  console.log(id);

  useEffect(() => {
    if (sessionStorage.getItem("allproducts")) {
      const allProducts = JSON.parse(sessionStorage.getItem("allproducts"))
      setProduct(allProducts.find(item => item.id == id))
    }
  }, [])

  return (
    <>
      <Header />
      <div style={{ paddingTop: '50px' }} className='flex flex-col mx-5'>
        <div className='grid grid-cols-2 gap-10 items-center h-screen'>
          <div>
            <img width={'450px'} height={"200px"} src={product?.thumbnail} alt="" />
            <div className='flex justify-between mt-5 mb-5'>
              <button className='bg-blue-600 text-white p-2'>Add to Wishlist</button>
              <button className='bg-green-600 text-white p-2'>Add to Cart</button>
            </div>
          </div>
          <div>
            <h3 className='font-bold mb-3'>PID : {product?.id}</h3>
            <h1 className='text-5xl font-bold mb-3'>{product?.title}</h1>
            <h4 className='font-bold text-red-600 text-2xl mb-3'>$ {product?.price}</h4>
            <h4 className='mb-3'>Brand: {product?.brand}</h4>
            <h4 className='mb-3'>Category: {product?.category}</h4>
            <p>
              <span className='font-bold'>Description </span>: {product?.description}
            </p>
            <h3 className='font-bold text-xl my-5'>Client Reviews</h3>
            {
              product?.reviews?.length > 0 ?
                product?.reviews?.map(item => (
                  <div key={item?.date} className='shadow-border p-2 mb-2'>
                    <div className='flex justify-between'>
                      <h5 className='font-bold'>{item.reviewerName}</h5>
                      <p>Rating: {item.rating} <i class="fa-solid fa-star text-yellow-500"></i></p>
                    </div>
                    <p>{item.comment}</p>
                  </div>
                ))
                :
                <div className='text-red-600 font-bold'>
                  No reviews yet !!!
                </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default View