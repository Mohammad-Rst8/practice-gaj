import React from 'react'
interface IImageProps{
    image:string
}
function ContentImage({image} :IImageProps) {
  return (
    <div className='w-[95%] md:w-[90%]  h-full bg-rose-300/40 flex mx-auto items-center justify-center rounded-xl my-20 p-3 ' >
        <img src={image} className='object-fill w-full shadow-2xl  h-5/6  rounded-xl'/>
    </div>
  )
}

export default ContentImage