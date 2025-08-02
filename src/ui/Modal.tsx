"use client"
import Button from '@/ui/Button';
import { RiCloseLargeFill } from "react-icons/ri";


import React, { useEffect, useRef } from 'react'
interface IModalProps{
    isClose :()=>void;
    title:string,
}
function Modal({isClose , title  }:IModalProps) {
  const modalref = useRef<HTMLDivElement | null>(null)
 
    const handleClickOutside = (event:any) => {
      if (modalref.current && !modalref.current.contains(event.target)) {
        isClose();
      }
    };

    document.addEventListener('mousedown',handleClickOutside);
  
  
  return (
    <div className='h-screen fixed w-full   top-0 left-0 bottom-0 backdrop-blur-sm bg-gray-500/50 z-50'>


        <div ref={modalref} className='absolute font-SCRegular text-gray-700 shadow-md shadow-amber-50 rounded-xl px-2  gap-4  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white      '>
          <div className='flex items-center justify-between'>
          <h2 className='text-3xl font-bold px-1 py-2'>Gaj Market</h2>
            <RiCloseLargeFill className='cursor-pointer hover:text-black transition-all' onClick={isClose}/>
          </div>
          <hr  className='text-gray-300  w-full my-1'/>
          <p className='pt-2 mb-4 font-SCRegular'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores nihil iusto, sit accusamus libero fugit tempora neque exercitationem ad? Natus.</p>
          <p className=' mb-4 font-SCRegular'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, dicta?</p>
          <hr className='text-gray-300  w-full' />
          <div className='my-3 text-white space-x-4'>
          <Button className='bg-blue-800 hover:bg-blue-900  px-2.5 py-1 ' onClick={isClose} content='I accept'/>
          <Button className='bg-red-500  hover:bg-red-600  px-2.5 py-1'onClick={isClose} content='Decline'/>

          </div>
        </div>
    </div>
  )
}

export default Modal