"use client"
import React, { useEffect, useRef } from 'react'
import { FaStar } from 'react-icons/fa'
interface ICustomerProps{
     title: string;
    image: string;
    rate: number;
    description: string;
    animation : string;
}
function CustomerItem({title , image, rate , description , animation}:ICustomerProps) {
    console.log(animation);
    
      const elemRef = useRef(null)
               useEffect(()=>{
            
                   const Observer = new IntersectionObserver((entrys) =>{
                         entrys.forEach(entry =>{
                           if(entry.isIntersecting){
                             console.log(entry.target);
                             
                            if(scrollY){
                             if(animation === "left"){
                               entry.target.classList.add("lefttoright","lefttorightDesktop")
                             }
                             else{
                               entry.target.classList.add("RightToLeft","RightToLeftDesktop")
                             }
                             Observer.unobserve(entry.target)
                            }
                             
                           }
                           
                         })
                       
                   })
                     if(elemRef.current){
                       Observer.observe(elemRef.current)
                     }
                     return () =>{
                       if(elemRef.current){
                         Observer.unobserve(elemRef.current)
                       }
                     }
               })
  return (
     <div className='bg-white  space-y-4 max-w-80 w-72 rounded-2xl text-justify shadow-2xl p-3 ' ref={elemRef}>
                   <div className='flex gap-3'>
                       <img src={image} className='w-10 h-10 rounded-full object-cover' />
                       <div >
                           <h3 className='font-bold'>{title}</h3>
                           <div className='flex gap-0.5'>
                                {Array.from({length : rate}).map((_, i) =>(<FaStar key={crypto.randomUUID()}/>))}
                          
                       
                           </div>
                       </div>
                   </div>
                   <p>{description}</p>
               </div>
  )
}

export default CustomerItem