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


const Andriod = () => {
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
                src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/9434883/1.jpg?6358https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQcZFNkZObk-bfLf1CuXmj2JR4kRFd3lQy1BVgskfRBmIesH4QgdFsQig2PrUizNDKrb98KDxf4H5A7f1agN3R10tqx-vcLkzJlTeCzKmXw3qSFbg-TQwfQsVkX7A&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Google Pixel 9 Pro - 128GB - 5G - Obsidian'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 1,700
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.5 | 100+ sold</p>
              </div>

              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/details"}>
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
                src="https://fdn2.gsmarena.com/vv/pics/oppo/oppo-reno-15c-1.jpg"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Oppo Reno 15c 5G Launched - 7Inches Display 108 MP Camera'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 400
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.0 | 4000 sold</p>
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
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRQ_8AGPB0oFSUnoSvO_xZABpr5-XMvuvPlz7RU_XvjV4HyL8tTK5LzhKR7zhY2W2d5yxQ_LN0jM-e7-rMx-Y8xrsyliY5LsOSo7fGJJ7ELglzbIqriZIMxxbC0JUjZMCQzKXStpQ&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Carmon 40 Pro 512gb, 5g Mobile Dual Card Dual Standby 4G Unlocked Version High-Quality Smartphone | Android 10 System, 8GB RAM, 256GB Storage, 6.56-inch Touch Screen, 8MP+16MP Camera, 3000mAh Batter'}

              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 96.38
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>3.0 | 100 sold</p>
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
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ5H8lxzUyEm6U23WcCFJJ6qNUjZpqqz4aGRY6iix4Ma8a9y6rGEIUjN2KEYCyb_6OEEg731mo9zwl5tvqq3tABYlVZ-lBGLZJEKSSy2EmB5CZMBE3SlAYSFf45&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'The New Flip Phone, Small and Convenient, Not Easy to Be Found, Standby Time 150 Hours, Use Time 12 Hours, with Built-in Flashlight, Suitable for Use as a Backup Machine, 2G Network, You Can Listen to Music, Suitable for Camping, Mountainous Areas'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 23.86
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>2.0 | 20 sold</p>
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
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRXASNyD7iu90NR3r4nWlyGPbiQnK6nWT5QWxcNIZc2QFihiMD_ACxEuKye8H-pRrQr01XA_1pJ4K29KXCEH8YSMcOaMIjEZzLS3F5urNo&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Motorola Edge 2025 256GB XT2519-1 5G (T-Mobile) Unlocked - Excellent'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 2229.99
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.5 | 100 sold</p>
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
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRjYDhLdBjbylsgJVx_JDXaPxPzZMGx7jie6U_XaOjg5B624ZvdKPS31oIk7ODxgcWFQeQYIzVF2TBYbKLP8bNufkLXFab6ZwA5Lxmip1RxeSz0OhE6dO9kwLWzESfaKw&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Motorola Edge 2023 256GB XT2305-1 5G Factory Unlocked - Very Good'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 139.99
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.1 | 90 sold</p>
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
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRpDN7u2TRWl1KHh5gEb2I8us1kxP9JiXD2xMSZZDQsoPgvsDog_MxClcYjCP09HkRU2p0bD15Atb5BIreDea9rhKs1e56VJT8xgk9Y7dsZjoiUJPWc2KrwT-qloETEislVj-FDYNNJIw&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'SERVO KING900 Android Mini Smartphone 4G LTE 2GB + 16GB Memory GPS Face, '}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 400
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.0 | 4000 sold</p>
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
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSAjgwDIdXAKMVRFQWHBqzD5dNqjYqqTL-5NfpWUHnc0p4PW4LLZ6joutO-S7VpVKlhbLL47a03imipnjOJudJ1fLuzYCQoxvycyC141JBN2gqD6sfWJwBvruYrpRh-cQW2FQ8shA&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Motorola RAZR 2025 XT2553 🌊 Pantone 256GB 🔓 UNLOCKED 5G ✅ Free 1Yr Warranty'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 374.95
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>5.0 | 50 sold</p>
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
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQeIX_9OArFcPwnU_TsNWGyDLYekNxCNGmoeTJX4BVA-eYnpBYY_wMICQ3OV25_tApMpAhmVOLLGGGCnfNtieKEp8T9Sau8ZEI1ZIAgdkL-W6D2Aa88Hx59cymYpGfGQkmOT7BY6DY&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'8GB+256GB RAM 6.8-Inch HD + 5G Android Phone, Dual SIM Unlock, Battery, Facial Recognition Unlock, GPS, Built-In Pen, Global Unlock, New Smartphone, Holiday Birthday Gift, Includes Charging Cable, Protective Case, Screen Protector, Travel Phone'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 131.72
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.0 | 4000 sold</p>
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
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTz9gpWQxK86OQLrqcen-4TiMFcMObXXzaoQJrjfnqD_6SyHTzt0M3jcgtOGj9S1jMIs9a2GPmojnZTLnqLNkyUH4r1mC0tkzxVTUtlqeoDZEeVR3Wq--CgqUS-1U_2qJ-17g&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'New Dual SIM 5G Smartphone, 6.8-inch HD Screen, 8GB+256GB Storage, Android 13 System, Face Recognition Unlock, Light Luxury Texture High Quality Feel, Includes Screen Protector and, Phone Case, No Data Cable And Earphones'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 140.27
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.0 | 4000 sold</p>
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
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR0KVy6zQgMFTp9GzsJYrTFu0rn3uL-0xqRcBPRqavAYsqNzzPLjBuRDW2BvkKzc5C9lcseZqLOdLi_x8i6Pshau6UI0ifmrRr1QLFyN48&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'2025 New 6.8" Large Screen Android Phone with 8GB & 256GB Storage, Dual SIM, USB-C Fast Charging, 5G, 2.4G/3G/4G, 1080x1920 Display, 1600x720 Resolution, 4G, 3G, 2G, 2'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 102.78
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.0 | 4000 sold</p>
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
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcStAaF2YPEKGLXa8kW9tzqBWSS25nkAP9fq5HNiYkmF3jY9UNNhcOq76V9QgWhWGPWm81t0qPv2ZjHXg3eQt1W4Uj95Il2tLLmW8jPSkUDlPpyggHt6uLi-thoUaIfpSGPV&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Realme 16 Pro max phone, Tecno Spark 40 Mobile Phone, New Global Unlocked'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ $109.84
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.0 | 4000 sold</p>
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
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcS6INryzK2bX9mpMCcnMGvuj4IZA7b3CoJBbIrx0OgLBeQvFPO4V3lG2aNJTIGYHm3ZJ2_MZeh3yHoiwFLYSUgd1Ou4O6F3UJByuoQ_yp9ByrhtqXHsIbIiNtuM-3vpKQnqBA&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Google Pixel 10 Pro mobile Phone Googles Android equipped with equipped with 8GB+256GB large storage space, Android 12 system unlocking smartphone, 6.82-inch high-definition display screen, dual SIM cards, 16MP+50MP front and rear ultra high definition cameras, long-life battery'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 106.40
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.0 | 4000 sold</p>
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
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcThnOVkiFcxbuY1OmvCzCkq516G6sCA3cwYArbDwCG6XYDi1O7KdrPjgxeG8SHcazUgfRhnbK6NeytY3Ux8RYV6di2dlQ7AL8JFhtaahp1VQZWyt273skqD9zqZjWfG0ADRits67WcXGg&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Redmi 17 Pro Max, Xr to 17 Pro Max Phone Phone 17 Pro Max, Fasionable and Fashionable and Minimalist Metal Bumper Anti-Drop Phone Case for Xiaomi 17 / 17 Pro / 17 Pro Max'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 55.76.
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.8 | 1000 sold</p>
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
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSWYvXwz6Cg12W6fxdqSbGLw8WhNhOMd9yjWDrbwHSy0exCCUlviwm8amuxCNm3RABwJEcGwLjPEAVLe0fOUdg7kmVcNh7bIg3_UDHsIP3BokYyk_YakWVU4AuG2t1Jld6VNY4UmA&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'Redmi 15 Pro,Redmi note 15, for for 15 Ultra Phone Case, Faux Leather Rotating Stand, High-end Full Cover Anti-fall Protective Case'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 63.95
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.1 | 200 sold</p>
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
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRb8nILy6_8YO6ynNVaPpWZLBUaPu21s0HxD5C2kIM0Il0XxyNWaDj9PDa8n7hknoV3CVXcLki10HABlIIrtNkHDR7vkPV9yZwEWgmYtFqvep7Bh1grzNksxD6ADfDHLJ5bBQvRgqKvG4s&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'6.8-inch S25 Ultra 2025 Unlocked Smartphone | 12GB+256GB, Dual SIM Standby, Multiple Colors, Type-C Charging, Long Battery Life, Perfect Holiday or Birthday Gift, Modern Smartphone'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 136.90
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>5.0 | 1000 sold</p>
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
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcREEII0FhIjeQRDpJVofp_umz1wC4R-wx28TdHY-dZtjfuYUMqEvVeu2HS4XFxXod6cu66lcAIQPLhXou6lvU1iVOaGqVSrDB1aIbjc_GEC0zvQlNbb2qVMMLv3oN7M6bhc2L5RQA&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                {'XIAOMI - Redmi Note 13 667 8GB 128GB ROM Android-Black'}
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 128.6
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>3.8 | 90 sold</p>
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

export default Andriod
