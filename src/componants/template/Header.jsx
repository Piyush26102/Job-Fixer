import React from 'react'
import SearchBox from './SearchBox'

function Header() {
  return (
    <div className='mt-12 bg-[#0e4482] h-fit pb-2'>
      <div className='my-10 pt-20 text-center text-white font-bold font-serif'>
         
         <h2 className='text-4xl'>A Powerful Career Website</h2>
         <p>"Connecting dreamers to dream jobs and industries to their true gems—your journey to success starts here!"</p>
      </div>
      <SearchBox />
      <div className='bg-orange-600 rounded-full mx-auto m-10 w-fit'>
        <img src="/introimg.png" alt="Working Person" className='w-80' />
      </div>
      
      
     
    </div>
  )
}

export default Header
