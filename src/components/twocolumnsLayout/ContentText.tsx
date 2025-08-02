import Button from '@/ui/Button'
import React from 'react'
interface IContentTextProps{
  title:string,
  description:string
}
function ContentText({title, description}:IContentTextProps) {
  return (
    <div className='space-y-5 px-3 md:w-[80%] text-justify'>
        <h3 className="font-extrabold text-4xl">{title}</h3>
        <p>{description}</p>
        <Button className="bg-pink-600 p-2.5 text-white hover:bg-rose-700 "  content='See more...'/>

    </div>
  )
}

export default ContentText