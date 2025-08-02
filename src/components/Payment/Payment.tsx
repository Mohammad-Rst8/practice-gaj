import React from 'react'
import TwocolumnsLayout from '../twocolumnsLayout/TwocolumnsLayout'
import ContentImage from '../twocolumnsLayout/ContentImage'
import ContentText from '../twocolumnsLayout/ContentText'

function Payment() {
  return (
    <div className='container space-y-32 md:space-y-0 mx-auto'>
        <TwocolumnsLayout
        RightContent={<ContentText title="Your Payments are Linked to Your Account" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis fuga quibusdam magnam natus vitae vel recusandae eius, nobis reiciendis. Aut. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, veniam?"/>} leftContent={<ContentImage image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjcaUmFoWjqJN9WPaMVjIiHLcfXzQnVBBAkw&s"/>} /> 
        <TwocolumnsLayout
        leftContent={<ContentText title="Manage Your Business That No One Can Imagine" description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis fuga quibusdam magnam natus vitae vel recusandae eius, nobis reiciendis. Aut. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, veniam?"/>} RightContent={<ContentImage image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQDyc3sCMO_5f5Bg3619T7smUgLZqb3DFNag&s"/>}  />
    </div>
  )
}

export default Payment