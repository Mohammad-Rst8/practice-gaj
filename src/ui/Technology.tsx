import React from 'react'

function Technology() {
    const items = [
        {id : 1 , title : "Servuces"},
        {id : 2 , title : "Peocheck"},
        {id : 3 , title : "Github"},
        {id : 4 , title : "Stripe"},
        {id : 5 , title : "Jotform"},
        
    ]
  return (
    <div className='mt-20'>
        <h2 className='text-3xl text-center font-bold'>Working with World Class Partners!</h2>
        <nav>
            <ul className='flex flex-col md:flex-row gap-2 items-center p-2 my-5 md:my-8 justify-between'>
            {items.map(item => (
                <li key={crypto.randomUUID()} className='text-2xl text-gray-600'>{item.title}</li>
            ))}

            </ul>
        </nav>
    </div>
  )
}

export default Technology