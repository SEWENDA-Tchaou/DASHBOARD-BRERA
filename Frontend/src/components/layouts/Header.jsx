import React from 'react'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div>
      <header className='flex w-full justify-between items-center h-20 bg-[#C9FFFF] shadow-lg'>
        <div className='mx-[100px] '>
          <img src="/images/BRERA.png" className='w-[80px] h-[80px]' alt="" />
        </div>
        <nav className='flex justify-around'>
          <Link to="/">Dashboard</Link>
          <Link  className='mx-5' href="">Mon Profile</Link>
        </nav>
      </header>
    </div>
  )
}

export default Header;