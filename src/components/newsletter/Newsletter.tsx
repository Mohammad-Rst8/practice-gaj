import React from 'react'
import Button from '../../ui/Button'

function Newsletter() {
  return (
    <div className='container mx-auto rounded-xl bg-slate-200 flex items-center flex-wrap-reverse md:flex-nowrap justify-center md:justify-between gap-3 px-10  p-10 my-20 '>
        <div className='flex w-full md:w-1/2 text-left flex-col gap-5 '>
        <h4 className='text-2xl'>Get NewsLette!</h4>
        <h3 className='text-4xl font-bold'>Stay Updated with Our Weekly Newsletter</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus deserunt deleniti earum ipsum excepturi a ipsa aspernatur perspiciatis omnis quasi similique, sunt accusamus. Aliquid, sed.</p>

        </div>

        <div className='w-1/2  '>
        <div className='flex flex-col items-center gap-4 p-5'>

            <h4 className='w-64 text-center text-xl font-bold'>SignUp For NewsLetter!</h4>
            <input type="email" placeholder='Email Address' className='bg-white w-80 lg:w-96 h-14 rounded-2xl px-3'/>
            <input type="password"  placeholder='Password' className='bg-white w-80 lg:w-96 h-14 rounded-2xl px-3'/>
            <Button content="Newsletter signup"className="bg-pink-600 w-80 lg:w-96 px-3 text-white py-2 rounded-full cursor-pointer hover:bg-rose-700 transition-all"/>
        </div>
        </div>
    </div>
  )
}

export default Newsletter