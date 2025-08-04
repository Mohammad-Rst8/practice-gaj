import React from 'react'
import { renderLinks } from './Navbar'
interface IMobileNavProps{
    icon:React.ReactNode
}
function MobileMenu({icon}:IMobileNavProps) {
  return (
    <nav className='flex flex-col absolute top-0 left-0 rounded-b-2xl shadow shadow-amber-50 items-center gap-4 py-5  w-full bg-red-100/95'>
               {icon}
          {
          
            renderLinks("text-black")
          }

          </nav>
  )
}

export default MobileMenu