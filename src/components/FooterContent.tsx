import Link from 'next/link'
import React from 'react'
import { ReactNode } from 'react'
interface IFooterContentProps{
     icons: {icon:ReactNode}[];
    title: string;
    description: string;
}
function FooterContent({icons,title , description}:IFooterContentProps) {
  return (
    <>
     <h3 className='text-2xl md:text-4xl text-center md:text-left'>{title}</h3> 
            <p className='text-xs md:text-base text-center md:text-left p-1 md:p-0'>{description}</p>
            <div className='flex items-center justify-center md:justify-start gap-3'>

            {icons.map(icon => (
                <Link key={crypto.randomUUID()} href="#" className='w-7 h-7 md:w-10 md:h-10 bg-white hover:bg-black rounded-full  transition-all'>
            <span className='text-black transition-all w-full h-full flex items-center justify-center hover:text-white'>
                 {icon.icon}
            </span>
            </Link>

            ))}

           
       
            </div>
            </>
  )
}

export default FooterContent