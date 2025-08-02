import React from 'react'
import Navbar from '../../components/Navbar'
import Content from './Content'

function Header() {
  return (
    <div className='container text-white mx-auto pt-2'>
       <Navbar/>
      <Content/>

    </div>
   
  )
}

export default Header