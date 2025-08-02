import React from 'react'
import { IconType } from 'react-icons'
interface IBoxProps{
    icon :React.ReactNode,
    left?:string,
    right?:string,
    top? :string,
    bottom ?:string,
    paragraph:string
}
function Box({icon , left , right,paragraph ,top, bottom}:IBoxProps) {
    
const positionStyles = {
    left: left ? left : undefined,
    right: right ? right : undefined,
    top: top ? top : undefined,
    bottom: bottom ? bottom : undefined,
  };


  return (
   <div className={`bg-gray-100 p-1 lg:p-2 w-40 md:w-44 rounded-md absolute `} style={positionStyles}>
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
