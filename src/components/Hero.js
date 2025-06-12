import React from 'react'

const Hero = () => {
  return (
    <div className='mx-w-[1640px] mx-auto p-4'>
      <div className='mx-h-[600px] relative'>
        <div className='absolute w-full h-full text-gray-200 max-h-[600px] bg-black/40 flex flex-col justify-center'>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Welcom <span>to</span></h1>
            <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>Bay <span className='text-orange-500'>KH'MER</span></h1>
           

        </div>
        <img className='w-full max-h-[600px] object-cover' src='https://www.agoda.com/wp-content/uploads/2024/02/Featured-photo-Cambodia-restaurants-1244x700.jpg' alt=''/>
      </div>
    </div>
  )
}

export default Hero
