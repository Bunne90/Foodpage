import React, { useState } from 'react'
import { data } from '../data/data'

const Food = () => {
    //console.log(data)
    const [foods,setFoods] = useState(data)

    const filterType =(category)=>{
        setFoods(
            data.filter((item)=>{
                return item.category===category;
            })
        )
    }
    const filterPrice = (Price)=>{
        setFoods(
            data.filter((item)=>{
                return item.Price === Price;
            })
        )
    }
    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-500 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div>
                    <p className='font-bold text-gray-700'>Filter type</p>
                    <div className='flex justify-between flex-wrap'>
                        <button onClick={()=>setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                        <button onClick={()=>filterType('Cambodian Foods')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Cambodian Foods</button>
                        <button onClick={()=>filterType('Asian Foods')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Asian Foods</button>
                        <button onClick={()=>filterType('European Foods')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>European Foods</button>
                    </div>
                </div>

                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={()=>filterPrice('0-5')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$0-5</button>
                        <button onClick={()=>filterPrice('5-10')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$5-10</button>
                        <button onClick={()=>filterPrice('10-20')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$10-20</button>
                        <button onClick={()=>filterPrice('20-30')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$20-30</button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>
                {foods.map((item,index)=>
                    <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-lg'>
                        <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Food
