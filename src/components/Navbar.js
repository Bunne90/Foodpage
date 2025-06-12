import React,{useState} from "react";
import { IoMenu, IoSearch, IoCartSharp, IoCloseOutline, IoHeart, IoCard, IoHelpCircle, IoPricetag, IoArrowDownOutline, IoPeople } from "react-icons/io5";
import { HiOutlineTruck } from 'react-icons/hi2';


const Navbar=()=> {
const [nav, setNav] = useState(false);

  return (
    <div className='max-w-[1640px] mx-flex flex justify-between items-center p-4'>
      <div className='flex items-center'>
        <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
          <IoMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl'>
          Bay <span className='font-bold'>KH'MER </span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>

      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <IoSearch size={25}/>
        <input className='bg-transparent p-2 w-full focus:outline-none' type='text' placeholder='Search foods'/>
      </div>

      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <IoCartSharp size={20} className='mr-2'/>Cart
      </button>

      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
      

      <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-[100%] left-0 w-[300px] h-screen bg-white z-10 duration-300'}>
        <IoCloseOutline onClick={()=>setNav(!nav)} size={30} className='absolute right-4 top-4 cursor-pointer'/>
        <h2 className='text-2xl p-4'>
          Bay <span className='font-bold'>KH'MER</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex'><HiOutlineTruck size={25} className='mr-4'/> Orders</li>
            <li className='text-xl py-4 flex'><IoHeart size={25} className='mr-4'/> Favorites</li>
            <li className='text-xl py-4 flex'><IoCard size={25} className='mr-4'/> Wallet</li>
            <li className='text-xl py-4 flex'><IoHelpCircle size={25} className='mr-4'/> Help</li>
            <li className='text-xl py-4 flex'><IoPricetag size={25} className='mr-4'/> Promotions</li>
            <li className='text-xl py-4 flex'><IoArrowDownOutline size={25} className='mr-4'/> Best One</li>
            <li className='text-xl py-4 flex'><IoPeople size={25} className='mr-4'/> Invite Friends</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
