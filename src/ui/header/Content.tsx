import Button from '@/ui/Button'
import React from 'react'

function Content() {
  return (
      <div className="flex items-center justify-center flex-col mt-44 md:mt-52 gap-10 text-center">
        <h1 className="text-5xl font-SCbold">Speed Up Business With Our Powerful Tool</h1>
        <p className='text-2xl'>this is fake paragraph in practicce-one</p>
        <Button className="bg-pink-600 p-2.5 text-white hover:bg-rose-700"  content='click button Homapage'></Button>
      </div>
  )
}

export default Content