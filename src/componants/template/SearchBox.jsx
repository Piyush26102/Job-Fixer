import React from 'react'

function SearchBox() {
  return (
      <div className='flex flex-col gap-4'>
         <div className='flex gap-1 items-center bg-[#ffffff] px-4 rounded-full font-bold text-black w-fit mx-auto'>
          <input type="text" placeholder='Keyword or Company Name' className='px-3 h-8 w-60 rounded-full font-bold ' />
          <i class="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className='flex gap-1 items-center bg-[#ffffff] px-4 rounded-full font-bold text-black w-fit mx-auto'>
      <ul id="dropdown" class="dropdown">Working Type</ul>
      </div>
      </div>
      
    
  )
}

export default SearchBox
