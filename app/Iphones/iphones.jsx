'use client'
import React, { useEffect, useState } from 'react'
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

const Iphones = () => {
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
    <main className="min-h-screen bg-white py-15 px-4 sm:px-6 lg:px-40">
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
          {/* Example Card - Repeat this for multiple items */}
          <div className="group relative bg-white rounded-xl hover:shadow-xl lg:hover:scale-110 transition-all duration-300 overflow-hidden">
            {/* Image Container */}
            <div className="relative aspect-square bg-gray-100">
              <div className="absolute inset-0 bg-gray-400/20 rounded-t-xl" />
              <img
                src="data:image/jpeg;base64,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"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                Iphone 17 Air
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 1,999.89
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.8 | 1,000+ sold</p>
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
                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ_FbePZw9fPm2dXLNWY0KLm2TEGWA4ttnXKnmWIkqJtU1ZbCS6anTaxQRCUK2gS4hSj_GDdC0oxZFmYjuW3aKTGP4wQifuxNJkRAw4ixY8hmSNbn18oz-YIcdUowkAJgOaTbkYEqupzdY&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain p-2"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                Apple Iphone Xs Max 256GB Unlocked Very Good Condition - All Colors
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 239.99
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>5.0 | 217 sold</p>
              </div>
                
                <div className='flex items-center mb-3 text-red-600'>
                 <MdLocalFireDepartment />
                 <p>Best Price in similar deals</p>
                </div>

              {/* Button - Hidden on mobile, visible on hover/focus */}
              <Link href={"/"}>
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
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQwp_d7ZOTjnj2p6ZiaxqHaaU1AeUQvnLqjcNx-1WAcTJHtY3YWAx0SQTc3RioQdiDPObcpYu7hFJqu7cVdp4Hvu84YXXMWNCzMuCgCq6k&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                Apple Iphone 12 Pro 256GB Unlocked Good Condition - All Colors
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 279.99
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
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQqeyUsCC5TpG9iLM8t95GeRmLNwjhWt4ORoCUoA6q2bncT1Xp26vn3rGHjHF-0wBztq_ogg1KVTyad5CtOovCfTwY1YU1zOt5yO9VZ0eDZRUHlTxj3Xj4hmG3XdZCYQKYhtk-8ow&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                Apple Iphone 15 Pro Max 1tb Unlocked Verry Good Condition - All Colors
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 649.99
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.5 | 100+ sold</p>
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
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSB3EqdqXZTmucFauEzhypWbHbGIFE4XfIWGak6X_zzmUo5svh5kDExaa9VHrhPRtRtskLrQptRQJ_gXzJkzREU4Q6OH3GNVqf56U5ln0Az7R2jYj-PFspiB3ZQqTMvgPUVpEE3fw&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                Apple Iphone 13 Pro Max 512GB Unlocked Good Condition - All Colors
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 469.99
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
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQxu6DKUlgVeCe_ydCdZNmhPqCAHzZqZuLkAnZpvId5bQ24ypOfLLwyGXxk6Kx7ucSM1ecJKfFQW0ATw8_FaP_rA9YdHqr9s81j9k6tlS70WRQtKbO6NrnrsNx9_8Hqc7CZ-ONs4dEsQA&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                Apple iPhone X 64 GB Silver 4G LTE Verizon Unlocked Smartphone
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 170.99
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>3.2 | 200 sold</p>
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
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQUaIiNaklqsqmaIJPWrDXdlUAO8lrC5ztfGjxjctBTErxOoE-AmLbXlSChl9hSFPN9QkxOpmWgqGzvoXChvXR1QjZotKg4yFvduVIfxyqyA0Skx3JJwN6fyjJBF3uUGtr79-9Yors&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                Apple iPhone 12 A2172 Fully Unlocked 128GB Purple (Good)
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 226.99
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
                src="data:image/jpeg;base64,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"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                Apple iPhone 15. Newphoria.
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 519.99
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgyVXZXRW7YMiNbwfX7jkvvvTRNWGI26-e4g&s"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                Apple Iphone 9 
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 90.99
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>2.0 | 80 sold</p>
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
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTW-Qb4RaTZwnuQObsRPdRgapnf_Q9MF_UqqAcPDisMrOhKtRWqiFFtSB6bEd7Nk6d-T9Z5JhFT13QTLaweN0VoijEBFnr-fYhq_mZhuXffP7NGNar7rE0ZUDS90FWXvwl17wUyDOk2&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                Apple IPhone 17 5G (Unlocked) 256GB Dual SIM 6.3in 48MP Always-On display
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 1,199.00
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
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQDz49wSyG_9fNA0HGyjonJmulg1mtAxvsw-mDjKmfn-E4VFBQkldDFJqC6Crei4TKwqZwx6mTeayd8J1dJs3j-77rBnlR9uyAAAmKEdvtW&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                Apple Iphone 14 Pro Max 256GB | 6.7 in | AT&T, Verizon, T-mobile, Spirit | More than 20.0 MP | 5G |iOS | 6GB - All Colors
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 6,700.00
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.0 | 4000 sold</p>
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
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTrsjWgYmjcd2zlLfw_9a32zQt0j5EmqwqZBcPE8Wl4eCmOrS3iOxZRH2VDl61JpD8ehpOKeshJqxwTmJCqY-LOH1SN-QK-pDxJZg7M3s0VLwr4lk4ajtACCuUvJNpQQUlSv8aLYQ&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                Apple IPhone 11 6.1-Inch Liquid Retina LCD (4GB RAM, 64GB ROM) IOS 13, (12MP+12MP)+12MP 4G LTE Smartphone-Nano Sim-PURPLE
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 600.00
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
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTNH5DoA-AXabna5IP36-CMtEaNiB9cEWsp2B-wAEAzKmRonJdcO-EJeo_6U8-gagt4-HMwP5gvaI59kRYoTdzUb1HnHeGNlutZTgnB82z9fiCKGRimz3_X&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                Apple Iphone 14 Plus  128GB Blue (Unlocked) |6in | Bluetooth | 6GB RAM | iOS| Hexa Core - All Colors
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 575.00
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
                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ9R7G7ZSDNPKKc6-HbbJXzpYc1Hchlc6Lv3jgk22NQIkg7UQGBqVTqXgwkP5gln581mUwo-ccpOqUKWmWLoWum_GGha_78E8YcIuWQn2cmhSG-F18DIfmfRhGkRETf6d8camkvvb6gAQ&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                Apple Iphone 16-61 256Gb ROM | 8GB RAM | Single Nano sim| iOS 18| Ultramarine
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 1,188.90
              </p>

              <div className='flex items-center'>
                <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStarHalf />
                <p>4.0 | 4000 sold</p>
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
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSkOyEw1K7Vz2JUULn6fBlen5L-eHWvnBLKMft3TR1IcIKcNnEgC-I8Elcs87pGNKoPnLF_J0jHn_F06FHth0cRVhDfgsvPBmovQzfZoTSr0au59xcQnPxdsXZbyqA7p86KesHpGkvy&usqp=CAc"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Card Content */}
            <div className="p-5">
              <div className='flex items-center justify-between'>
              <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
               Apple iPhone 16 Pro 256GB Unlocked Excellent Condition - All Colors
              </h3>
              <Link href={""}>
               <div className='border border-gray-200 hover:bg-black hover:text-white transition-all rounded-full w-13 h-13'>
                <BsCartPlus className='text-4xl mt-2 ml-2' />
                </div>
              </Link>
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-4">
                AU$ 719.99
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
          </>
          )}
          </div>
      </div>
    </main>
  )
}

export default Iphones
