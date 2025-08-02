import React from 'react'
import { FaBimobject } from "react-icons/fa";
import { FaAppleAlt } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";
import { FaBattleNet } from "react-icons/fa";
import FooterLinkItem from './FooterLinkItem';
import FooterContent from './FooterContent';

function Footer() {
    const footerLinks=[
        {id:1 , title:"Reserved" , items:[{content:"Services" , link:"https://react-icons.github.io/react-icons/icons/fa/"},{content :"pricing",link:"https://react-icons.github.io/react-icons/icons/fa/"},
            {content:"Accounting",link:"https://react-icons.github.io/react-icons/icons/fa/"},{content:"Services" , link:"https://react-icons.github.io/react-icons/icons/fa/"}
        ]},
        {id:2 , title:"About" , items:[{content:"Blog" , link:"https://react-icons.github.io/react-icons/icons/fa/"},{content :"Chart",link:"https://react-icons.github.io/react-icons/icons/fa/"},
            {content:"Company",link:"https://react-icons.github.io/react-icons/icons/fa/"},{content:"Content" , link:"https://react-icons.github.io/react-icons/icons/fa/"}
        ]},
        {id:3 , title:"Contact" , items:[{content:"Account" , link:"https://react-icons.github.io/react-icons/icons/fa/"},{content :"Subscribe",link:"https://react-icons.github.io/react-icons/icons/fa/"},
            {content:"Service",link:"https://react-icons.github.io/react-icons/icons/fa/"},{content:"Modify" , link:"https://react-icons.github.io/react-icons/icons/fa/"}
        ]}
    ]
        const footerContent = {
            title:"👀Logo",
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto accusamus corporis commodi cupiditate.",
            icons: [{icon:<FaAppleAlt size={25}/>},{icon:<FaBitcoin size={25}/>},{icon:<FaBattleNet size={25}/>},{icon:<FaBimobject size={25}/>}]
        }
        
  return (
    <div className=' bg-gradient-to-br py-20 text-white from-blue-500 to-blue-950 '>
        <div className='container py-5 px-2 mx-auto flex items-center flex-wrap-reverse sm:flex-nowrap justify-center sm:justify-between gap-10'>

        <div className='w-full md:w-1/2 space-y-6 md:space-y-8 '>
                <FooterContent {...footerContent}/>
        </div>
        <div className='w-full md:w-2/3 grid grid-cols-3' style={{gridTemplateColumns:`repeat(${footerLinks.length},1fr)`}}>
          {footerLinks.map(item =>(
            <FooterLinkItem key={crypto.randomUUID()} {...item}/>
          ))}
          
           
          
        </div>
        </div>
    </div>
  )
}

export default Footer