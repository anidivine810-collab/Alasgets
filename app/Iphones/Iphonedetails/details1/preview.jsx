'use client'
import React, { useEffect, useState } from 'react'
import { useSession } from "next-auth/react"
import { IoIosStar, IoIosStarHalf } from 'react-icons/io'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import { collection, addDoc } from "firebase/firestore";
import { db } from '@/app/Config/firebaseConfig';

const Preview = () => {
  const { data: session } = useSession()

  const [loading, setLoading] = useState(true)
      const [processing, setProcessing] = useState(false)
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false)
        }, 1800) //
    
        return () => clearTimeout(timer)
      }, [])

  const handleSubmit = async (value)=>{
    if (!session?.user) {
      alert("Please sign in to add to cart")
      return
    }
    
    try {
      setProcessing(true)
      const cartDetails = {
        author: session.user.name,
        img: session.user.image,
        timestamp: new Date().toLocaleDateString(),
        authorId: session.user.id,
        ...value
      }
      console.log(cartDetails);
      const docRef = await addDoc(collection(db, "alas"), cartDetails)
      console.log("Document written with ID", docRef.id);
    } catch (error) {
      console.error("Error adding to cart", error)
    alert("Oops, an error occurred. Try again later!")
    } finally{
      setProcessing(false)
    }
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-16 xl:px-32 2xl:px-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-start">
            {/* Skeleton Image Section */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md sm:max-w-lg lg:max-w-none border-2 border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10 bg-white">
                <Skeleton 
                  variant="rectangular" 
                  className="w-full aspect-square rounded-lg"
                />
              </div>
            </div>

            {/* Skeleton Info Section */}
            <div className="lg:mt-4 space-y-5">
              <Skeleton variant="text" width="85%" height={60} />
              <Skeleton variant="text" width="55%" height={40} />

              <Stack direction="row" spacing={1} alignItems="center">
                <Skeleton variant="circular" width={28} height={28} />
                <Skeleton variant="circular" width={28} height={28} />
                <Skeleton variant="circular" width={28} height={28} />
                <Skeleton variant="circular" width={28} height={28} />
                <Skeleton variant="circular" width={28} height={28} />
                <Skeleton variant="text" width={120} height={32} sx={{ ml: 2 }} />
              </Stack>

              <Skeleton variant="text" width="30%" height={70} />

              <Skeleton variant="text" width="70%" height={24} />

              <hr className="border-gray-200 my-8" />

              <Stack direction="column" spacing={3} maxWidth={400}>
                <Skeleton variant="rectangular" width="100%" height={56} sx={{ borderRadius: 2 }} />
                <Skeleton variant="rectangular" width="100%" height={56} sx={{ borderRadius: 2 }} />
              </Stack>
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-16 xl:px-32 2xl:px-40">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xl:gap-12 items-start">
          {/* Product Image Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md sm:max-w-lg lg:max-w-none border-2 border-gray-200 rounded-2xl p-6 sm:p-8 lg:p-10 bg-white">
              <div className="relative aspect-square w-full">
                <img src="data:image/jpeg;base64,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" 
                className="object-contain w-full h-full"
          alt="Iphone 17 Air"
          />
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="lg:mt-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4">
              Iphone 17 Air
            </h1>

            <div className="flex items-center gap-2 text-xl sm:text-2xl mb-5 text-amber-500">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStarHalf />
              <span className="text-gray-600 text-lg sm:text-xl ml-2">
                4.8 | 1,000+ sold
              </span>
            </div>

            <p className="text-4xl sm:text-5xl font-bold text-red-600 mb-4">
              AU$ 1,999.89
            </p>

            <p className="text-gray-600 mb-6 text-base sm:text-lg">
              Tax excluded, add at checkout if applicable • Extra 2% off with coins
            </p>

            <hr className="border-gray-200 mb-8" />

            <div className="flex flex-col gap-4 max-w-md">
              <button
              disabled={processing}
               className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white py-4 px-6 font-medium rounded-lg transition-colors duration-200 text-lg">
                Buy Now
              </button>

              <button 
              onClick={handleSubmit}
              disabled={processing}
               className="w-full border-2 border-gray-800 hover:bg-gray-50 active:bg-gray-100 text-gray-800 py-4 px-6 font-medium rounded-lg transition-colors duration-200 text-lg">
                {processing ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    </svg>
                    Adding...
                  </span>
                ) : (
                  "Add to Cart"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Preview

