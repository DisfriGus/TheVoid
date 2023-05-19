import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between py-[55px] items-center'>
        <div>
            <h1 className='font-extrabold text-2xl'>The Void</h1>
        </div>
        <div>
            <ul className='flex gap-6'>
                <Link className='font-medium text-[18px] text-[#67686B]' to='/About'>About</Link>
                <Link className='font-medium text-[18px] text-[#67686B]' to='/Features'>Features</Link>
                <Link className='font-medium text-[18px] text-[#67686B]' to='/Post'>Post</Link>
            </ul>
        </div>
        <div>
            <button className='bg-[#145AFF] text-white py-4 px-6 rounded-md'>Get Started</button>
        </div>
    </div>
  )
}

export default Navbar