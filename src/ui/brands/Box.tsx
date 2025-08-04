import React, { useEffect, useRef } from 'react'
import { log } from 'util';

interface IBoxProps{
    icon :React.ReactNode,
    left?:string,
    right?:string,
    top? :string,
    bottom ?:string,
    paragraph:string
    ,className?:string
}
function Box({icon , left , right,paragraph ,top, bottom , className}:IBoxProps) {
  const elemRef = useRef(null)
           useEffect(()=>{
        
               const Observer = new IntersectionObserver((entrys) =>{
                     entrys.forEach(entry =>{
                       if(entry.isIntersecting){
                     
                      
                         if(entry.target.className.includes("left")){

                           entry.target.classList.add("lefttoright","lefttorightDesktop")

                         }
                         else{
                           entry.target.classList.add("RightToLeft","RightToLeftDesktop")
                         }
                         Observer.unobserve(entry.target)
                        
                         
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
const positionStyles = {
    left: left ? left : undefined,
    right: right ? right : undefined,
    top: top ? top : undefined,
    bottom: bottom ? bottom : undefined,
  };



  return (
   <div className={`bg-gray-100 p-1 lg:p-2 w-40 md:w-44 rounded-md absolute ${className}`} ref={elemRef} style={positionStyles}>
            <div className='bg-rose-300 w-10 h-10 flex items-center justify-center rounded-md'>
               {icon}
            </div>
                <h3 className='lg:text-xl font-bold'>open rate archived</h3>
                <h2 className='lg:text-2xl font-bold'>98%</h2>
                <p className='text-xs lg:text-sm'>{paragraph}</p>
        </div>
  )
}

export default Box
