import React from 'react'

export default function () {
  return (
    <div id='contact' className='max-w-[1040px] m-auto md:pl-20 pl-4 py-16'>
        <h1 className='py-4 text-center font-bold text-[#001b5e] text-4xl'>Contact</h1>
        <form action='https://formspree.io/f/mnqeqagr' method='POST' encType='multipart/form-data'>
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='text-sm uppercase py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 border-gray-300 flex' type="text" name='name' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-sm uppercase py-2'>Phone</label>
                    <input className='border-2 rounded-lg p-3 border-gray-300 flex' type="text" name='phone' />
                </div>
            </div>
            <div className='flex flex-col py-2'>
                <label className='text-sm uppercase py-2'>Email</label>
                <input className='border-2 rounded-lg p-3 border-gray-300 flex' type="email" name='email' />
            </div>
            <div className='flex flex-col py-2'>
                <label className='text-sm uppercase py-2'>Subject</label>
                <input className='border-2 rounded-lg p-3 border-gray-300 flex' type="text" name='subject' />
            </div>
            <div className='flex flex-col py-2'>
                <label className='text-sm uppercase py-2'>Message</label>
                <textarea className='border-2 rounded-lg p-3 border-gray-300 flex' rows={10} name='message'></textarea>
            </div>
            <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>
                Send Message
            </button>
        </form>
    </div>
  )
}
