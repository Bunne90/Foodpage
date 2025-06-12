import React from 'react'

const HeadineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Terk Kreung</p>
            <p className='px-2'>Through 8/26</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='rounded-xl max-h-[160px] w-full object-cover' src='https://cdn.pixabay.com/photo/2018/10/25/06/00/khmer-food-3771719_1280.jpg' alt='/'/>
      </div>

      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Cambodian Noodles</p>
            <p className='px-2'>Added Daily</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='rounded-xl max-h-[160px] w-full object-cover' src='https://t4.ftcdn.net/jpg/08/36/56/27/360_F_836562731_NnM6TW2IcdHZMJvgomayhgCofyaotQCS.jpg' alt='/'/>
      </div>

      <div className='rounded-xl relative'>
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Prahok Ktiss</p>
            <p className='px-2'>Testy Treats</p>
            <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='rounded-xl max-h-[160px] w-full object-cover' src='https://allpointseast.com/wp-content/uploads/2018/03/DSC_0028-site.jpg' alt='/'/>
      </div>
    </div>
  )
}

export default HeadineCards
