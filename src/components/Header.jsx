import React from 'react'
import { Link } from 'react-router-dom'

// icons
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";

function Header() {
  return (
    <header className='bg-rose-500 py-5 px-8 text-white flex justify-between'>
       <Link to={"/"}>
       <h1 className="logo text-2xl font-bold">Logo</h1>
       </Link>
        <ul className='flex gap-6 items-center'>
            <li className=' hover:text-blue-600'>
                <Link to={"/"}>Home</Link>
            </li>
            <li className=' hover:text-blue-600'>
                <Link to={"/about"}>About</Link>
            </li>
            <li className=' hover:text-blue-600'>
                <Link to={"/contact"}>Contact</Link>
            </li>
            <li className='text-xl relative hover:text-blue-600'>
                <Link to={"/cart"}><MdOutlineShoppingCart /></Link>
                <span className="count absolute w-[1.1rem] h-[1.1rem] rounded-full bg-gray-200 -top-3 -right-3.5 text-sm flex justify-center items-center text-black">0</span>
            </li>
            <li className='text-xl relative hover:text-blue-600'>
                <Link to={"/wishlist"}><FaRegHeart /></Link>
                <span className="count absolute w-[1.1rem] h-[1.1rem] rounded-full bg-gray-200 -top-3 -right-3.5 text-sm flex justify-center items-center text-black">0</span>
            </li>
            <li className='flex justify-center items-center text-xl hover:text-blue-500'>
                <Link to={"/login"}><CgProfile /></Link>
            </li>
            
        </ul>
    </header>
  )
}

export default Header