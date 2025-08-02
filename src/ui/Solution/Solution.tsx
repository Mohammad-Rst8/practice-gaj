import React from 'react'
import { RiBikeLine } from "react-icons/ri";
import SolutionItem from './SolutionItem';
import { title } from 'process';

function Solution() {
  return (
    <div className='bg-slate-200 p-2 pt-4 mt-20 '>
        <div className='container mx-auto'>

        <h2 className='text-center text-3xl font-bold'>Our solution For Your Business</h2>
        <p className='text-center '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, quis.</p>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 mt-2  py-5'>
           <SolutionItem icon={<RiBikeLine size={35} className='text-fuchsia-400'/>} title='business body' paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, adipisci!"/>
           <SolutionItem icon={<RiBikeLine size={35} className='text-fuchsia-400'/>} title='business body' paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, adipisci!"/>
           <SolutionItem icon={<RiBikeLine size={35} className='text-fuchsia-400'/>} title='business body' paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, adipisci!"/>
           <SolutionItem icon={<RiBikeLine size={35} className='text-fuchsia-400'/>} title='business body' paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, adipisci!"/>
        
         
        </div>
        </div>
    </div>
  )
}

export default Solution