import React from 'react'

export default function Header() {
  return (
    <header className='bg-slate-200 shadow-md'>
       <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-slate-500'>Estate</span>
                <span className='text-slate-700'>Pro</span>
            </h1>
            <form className='bg-slate-100 p-3 rounded-lg'>
                <input type='text' placeholder='Search...'className='bg-transparent focus:outline-none'/>
            </form>
       </div>
    </header>
  )
}
