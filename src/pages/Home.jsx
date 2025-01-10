import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'

const Home = () => {

  const dispatch = useDispatch()

  const { allProducts, loading, errorMsg } = useSelector(state => state.productReducer)
  // console.log(allProducts, loading, errorMsg);

  const [currentPage,setCurrentPage]=useState(1)
  const productPerPage=8
  const totalPages=Math.ceil(allProducts?.length/productPerPage)
  const currentPageProductsLastIndex=currentPage * productPerPage
  const currentPageProductsFirstIndex=currentPageProductsLastIndex - productPerPage
  const visibleAllProducts=allProducts?.slice(currentPageProductsFirstIndex,currentPageProductsLastIndex)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])

  return (
    <>
      <Header insideHome={true} />
      <div style={{ paddingTop: '100px' }} className='container px-4 mx-auto'>
        {
          loading ?
            <div className='flex justify-center items-center my-5 text-lg'>
              <img width={'80px'} height={'80px'} src="https://www.icegif.com/wp-content/uploads/2023/07/icegif-1263.gif" alt="" />
              Loading
            </div> :
            <>
              <div className='grid grid-cols-4 gap-4'>

                {
                  allProducts?.length>0 ?
                  allProducts.map(product=>(
                  <div key={product?.id} className='rounded border p-2 shadow'>
                  <img width={'100%'} height={"200px"} src={product?.thumbnail} alt="" />
                  <div className='text-center'>
                    <h3 className='text-xl font-bold'>{product?.title}</h3>
                    <Link to={`/${product?.id}/view`} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View more...</Link>
                  </div>
                </div>
                  ))
                :
                <div className='flex justify-center items-center my-5 text-red-600 text-lg font-bold'>
                  Product not found!!!
                </div>
                }
              </div>

            </>
        }
      </div>
    </>
  )
}

export default Home