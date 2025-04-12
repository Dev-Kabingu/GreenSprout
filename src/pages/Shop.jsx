import React from 'react'
import {Link} from "react-router-dom"

const Shop = () => {
  return (
    <div className='text-center my-12'>
      <h1 className='text-6xl mb-8 text-gray-500'>404 <span className='text-xl'>Error</span></h1>
      <Link to ='/' className='text-blue-500 italic underline'>Home</Link> / <Link to ='/Conatct' className='text-blue-500 italic underline'>Contact</Link>
    </div>
  )
}

export default Shop
