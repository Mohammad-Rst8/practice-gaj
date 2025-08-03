"use client" 
import React, { useState } from 'react'
import { HiBars3 } from "react-icons/hi2";

import { HiOutlineXMark } from "react-icons/hi2";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '@/ui/Button'
import Modal from '@/ui/Modal'
const navlinks = [
    {path: "/" , label: "Home"},
    {path: "/product" , label: "Product"},
    {path: "/pricing" , label: "Pricing"},
    {path: "/srategies" , label: "Srategies"}
]
function Navbar() {
  const [isModalOpen , setIsModalOpen] = useState(false)
  const [mobileMenu , setmobileMenu] = useState(false)
  function clickHandler(){
   
    setIsModalOpen(true)
  }

  
    const pathname = usePathname()
  return (
        <div className='bg-blue-700 relative '>

        <div className='container flex items-center text-white justify-between text-xl font-SCbold py-4 px-2'>
        <Link href="/" className='text-3xl md:text-4xl'>👀Logo</Link>
        <nav className='space-x-5 md:inline hidden'>
           {navlinks.map(navlink =>(
            <Link key={crypto.randomUUID()} href={navlink.path} className={`hover:text-gray-700 px-3 py-0.5 rounded-xl ${pathname === navlink.path ? "bg-rose-50 text-black" : ""}`} >{navlink.label}</Link>
           ))}
        </nav>
        <div className='md:hidden ' >
        
            
              <HiBars3 className='cursor-pointer' size={30} onClick={() => setmobileMenu(true)}/>
            

        
        
          
              {mobileMenu &&
               <nav className='flex flex-col absolute top-0 left-0 rounded-b-2xl shadow shadow-amber-50 items-center gap-4 py-5  w-full bg-red-100/95'>
               <HiOutlineXMark className='cursor-pointer' size={30} onClick={() => setmobileMenu(false)}/>
          {
            mobileMenu && navlinks.map(navlink => (
               <Link key={crypto.randomUUID()} href={navlink.path} className={` px-3 py-0.5 transition-colors hover:text-gray-700  text-white rounded-xl ${pathname === navlink.path ? "bg-rose-50" : ""}`} >{navlink.label}</Link>
            ))
          }

          </nav>
              

              }
          
         
        </div>
        <Button onClick={clickHandler} className='bg-transparent border rounded-full border-black px-2 py-1 hover:bg-rose-700 active:bg-rose-700' content='Get a Demo'/>
        {isModalOpen && <Modal  title='this modal for test my ability' isClose={()=>setIsModalOpen(false)}/>}
        </div>
        </div>
  
  )
}

export default Navbar