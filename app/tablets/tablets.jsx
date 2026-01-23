'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { MdLocalFireDepartment } from "react-icons/md";
import { BsCartPlus } from "react-icons/bs";
import Link from 'next/link';
import Skeleton from '@mui/material/Skeleton';
import Box from '@mui/material/Box';


const ProductCardSkeleton = () => {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden border border-gray-200">
      {/* Image area */}
      <Box sx={{ position: 'relative', aspectRatio: '1 / 1', bgcolor: 'grey.100' }}>
        <Skeleton 
          variant="rectangular" 
          width="100%" 
          height="100%" 
          animation="wave" 
        />
      </Box>

      {/* Content area */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <Skeleton variant="text" width="85%" height={28} />
        
        {/* Price */}
        <Skeleton variant="text" width="50%" height={32} />
        
        {/* Rating */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Skeleton variant="circular" width={20} height={20} />
          <Skeleton variant="text" width="60%" height={20} />
        </Box>
        
        {/* Badge / Fire text */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Skeleton variant="circular" width={20} height={20} />
          <Skeleton variant="text" width="70%" height={20} />
        </Box>

        {/* Add to cart button placeholder */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Skeleton variant="circular" width={52} height={52} />
        </Box>

        {/* Preview button area (hidden normally) */}
        <Skeleton variant="rectangular" width="100%" height={44} sx={{ borderRadius: 1 }} />
      </div>
    </div>
  );
};

const Tablets = () => {
     const [loading, setLoading] = useState(true);
    
            useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 1800); // ~1.8 seconds — feels natural
    
        return () => clearTimeout(timer);
      }, []);
    
    
       // definning how many skeletons to show (match your real grid count)
      const skeletonCount = 10;
  return (
   <main className="min-h-screen bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-16 xl:px-32 2xl:px-40">
       <div className="max-w-8xl mx-auto">
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {loading ? (
             // Show skeletons while loading
            Array.from({ length: skeletonCount }).map((_, index) => (
              <ProductCardSkeleton key={`skeleton-${index}`} />
            ))
          ) : (
             <>
             <div className="group relative bg-white rounded-xl hover:shadow-xl lg:hover:scale-110 transition-all duration-300 overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100">
              <div className="absolute inset-0 bg-gray-400/20 rounded-t-xl" />
              <img
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTPjQd6wyktjobXPh4Zc1vyLd_B9BdYK-MekyNTXN7iscJRswRQcdTGgCt5ZBJ5GPHIy3Pv5kDu3H3XTPcEEE1sxJPd7CqJtqoH5-fyBwqZRVfKyffrKEaxNbHvB3ztMFY1RKUt1eSRxA&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'for Samsung Galaxy Tab S10+ Plus/S9+/S9 FE+/S8+/S7+/S7 FE Keyboard Case 12.4“ Ma'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 118.99
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.0 | 100 sold</p>
              </div>
                
                <div className='flex items-center mb-3 text-red-600'>
                 <MdLocalFireDepartment />
                 <p>Best Price in similar deals</p>
                </div>

              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={""}>
                 <button className="w-full bg-black text-white py-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hover:bg-gray-800">
                   See Preview
                 </button>
              </Link>
            </div>
          </div>
          <div className="group relative bg-white rounded-xl hover:shadow-xl lg:hover:scale-110 transition-all duration-300 overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100">
              <div className="absolute inset-0 bg-gray-400/20 rounded-t-xl" />
              <img
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQxAIQJ5D6q2I7v7H9QCkZOvsVFuBIvGazoek-QBgkUp5k0Lwt9GlWFsMojkfOkWq2dcXjXy5IX95CAw07kFaSYYXOb9XaIMtRlHYvcITZUA-OuTBgfGKZ7aJxqHwcgjtCx-DPNtm8&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'for Samsung Galaxy Tab S10+ / S9+ / S8+ / S7+ Case with Keyboard, 12.4'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 163.16
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>3.9 | 90 sold</p>
              </div>

              <div className='flex items-center mb-3 text-yellow-900'>
                 <MdLocalFireDepartment />
                 <p>Top selling in similar deals</p>
                </div>

              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={""}>
                 <button className="w-full bg-black text-white py-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hover:bg-gray-800">
                   See Preview
                 </button>
              </Link>
            </div>
          </div>

          <div className="group relative bg-white rounded-xl hover:shadow-xl lg:hover:scale-110 transition-all duration-300 overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100">
              <div className="absolute inset-0 bg-gray-400/20 rounded-t-xl" />
              <img
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSDT4lnzTIk7CKF6c_9d3-KGrf0Pr6MUQLYCa-JkP1uDa1nN28FfBsbrmTDQwIoF9cgIm8PLdRmevHgFodvkwzHWUz1z3OdV8byJcdyaBqt4FvqM2QYbUmDzp7e8sQxMbChv5EJ0w&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Qetupa 10.1 Inch Android 14 Tablet PC, MTK 6762 Octa-Core 2.0GHz Processor, 8GB RAM+256GB ROM/4GB RAM+128GB ROM, 802.11ax Wi-Fi 6, Bluetooth 5.4, Incell HD (1280*800) IPS Touchscreen, 5MP+13MP Dual Cameras, 6000mAh Battery, Support 512GB Expansion, Type-C Port, No SIM Card Support'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 106.80
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>2.0 | 40 sold</p>
              </div>
                
                <div className='flex items-center mb-3 text-yellow-900'>
                 <MdLocalFireDepartment />
                 <p>Top selling in similar deals</p>
                </div>

              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={""}>
                 <button className="w-full bg-black text-white py-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hover:bg-gray-800">
                   See Preview
                 </button>
              </Link>
            </div>
          </div>
          <div className="group relative bg-white rounded-xl hover:shadow-xl lg:hover:scale-110 transition-all duration-300 overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100">
              <div className="absolute inset-0 bg-gray-400/20 rounded-t-xl" />
              <img
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRewG1NUg-e686flmC7GLOID9zTt4MsV5HjxKlT188zDGIP3VxTKdDe5KeEPevUoD1CTr6nyeNlrYHC10KLEUQ-3TQyvIDnJc_LxoSLdF4x5ZmqdeyLWoA-xLbvglnLm_5yvs0FxT1y&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'CRELANDER Android 14 Tablet Featuring a 10.1 Inch Unisoc T606 Processor, with a Resolution of 1920X1200 on an IPS Display And a Refresh Rate of 90Hz. It Comes with 4GB of RAM, 8GB of Storage, 256GB of Internal Memory, 13MP And 8MP Cameras'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 141.51
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>3.5 | 50 sold</p>
              </div>
                
                <div className='flex items-center mb-3 text-red-600'>
                 <MdLocalFireDepartment />
                 <p>Best Price in similar deals</p>
                </div>

              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={""}>
                 <button className="w-full bg-black text-white py-3 rounded-lg font-medium opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 hover:bg-gray-800">
                   See Preview
                 </button>
              </Link>
            </div>
          </div>

             </>
          )}
          </div>
          </div>
      
    </main>
  )
}

export default Tablets
