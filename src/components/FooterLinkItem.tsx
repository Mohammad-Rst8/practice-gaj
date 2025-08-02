import Link from 'next/link';
import React from 'react'
interface IFooterItemsProps{
 id: number;
  title: string;
   items: { content: string; link: string; }[]; 

}
function FooterLinkItem({title , items}:IFooterItemsProps) {
  console.log(title , items);
  
  return (
    
          <nav className='space-y-2 mx-auto'>
                <h3 className='text-xl md:text-2xl'>{title}</h3>
                <div className='flex flex-col gap-2 px-1'>
                  {items.map(item => (
                   <Link key={crypto.randomUUID()} href={item.link} className='text-sm md:text-base w-max hover:text-gray-800 transition-all'>{item.content}</Link>
                
              ))}
                   
                </div>
            </nav>
    
  )
}

export default FooterLinkItem