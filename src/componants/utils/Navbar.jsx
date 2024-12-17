import React from 'react'
const Navbar = () => {
  return (
    <nav className='flex gap-2 p-2 bg-orange-600 text-white font-serif justify-between fixed top-0 w-full font-bold text-2xl items-center'>
        <div className='underline'>
            Job Fixer
        </div>
        <i class="fa-solid fa-bars"></i>
    </nav>
  )
}

export default Navbar
