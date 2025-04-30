import React from 'react'
import { FaLaughWink } from "react-icons/fa";

function Footer() {
  return (
    <>
    <footer className='bg-rose-500 py-5 px-4 text-white flex flex-col justify-center items-center gap-2'>
      <p>Made by Jyoti & Chirag with fear</p>
      <p className='flex gap-2 items-center'>Copy karo to credit bhi de dena bhaiya <FaLaughWink /></p>

    </footer>
    </>
  )
}

export default Footer