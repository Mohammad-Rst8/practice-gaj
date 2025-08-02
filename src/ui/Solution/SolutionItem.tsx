import Button from '@/ui/Button'
import React from 'react'
interface ISolutionProps{
    icon: React.ReactNode,
    title: string,
paragraph: string,
}
function SolutionItem({icon,title,paragraph}:ISolutionProps) {
  return (
    <div className='bg-white space-y-2 p-2 px-4 pt-6 rounded-lg'>
                <div className='bg-fuchsia-400/60 w-14 h-14 rounded-xl flex items-center justify-center'>
                       {icon}
                </div>
                <h4 className='text-2xl font-bold'>{title}</h4>
                <p>{paragraph}</p>
                <Button content="Click me!" className='bg-fuchsia-400 px-2 py-0.5 rounded-md my-4 hover:bg-fuchsia-600 cursor-pointer transition-all'/>
                <button className='' type='button'></button>
            </div>
  )
}

export default SolutionItem