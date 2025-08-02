import Button from '@/ui/Button'
import React from 'react'
import { HiMiniTrash } from "react-icons/hi2";
import Box from './Box';


function Brand() {
  return (
    <div className='flex flex-col-reverse md:flex-row p-2 lg:p-0  items-center gap-10 justify-between'>
        <div className='w-5/6 md:w-2/3  space-y-4'>
            <h2 className='text-2xl font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quod.</h2>
            <p className=' text-sm text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam pariatur corrupti earum molestiae eaque, amet consequuntur ratione ipsa dignissimos nesciunt! Dolor, quasi vero! Quasi iusto commodi facilis tempora officia debitis fugit nisi dolorum repellat maiores perspiciatis odit dolore esse soluta quibusdam tenetur, velit obcaecati expedita eveniet molestiae dignissimos vitae fugiat!</p>
            <Button content='show Brand' className="bg-pink-600 px-3 text-white py-2 rounded-full cursor-pointer hover:bg-rose-700 transition-all"/>
            </ div>
        <div className=' bg-rose-200 rounded-lg w-5/6  md:w-1/2 h-80 relative mb-10'>
      
            <Box icon={<HiMiniTrash size={25}/>} left='-15px' top='-20px'  paragraph="Lorem, ipsum dolor"/>
            <Box icon={<HiMiniTrash size={25}/>} right='0' top='30%' paragraph="Lorem, ipsum dolor" />
            <Box icon={<HiMiniTrash size={25}/>} left='-15px' top='65%' paragraph="ctetur adipisicing elit. Aperia" />
         
        </div>
    </div>
  )
}

export default Brand