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
          alt="Apple iPhone 15. Newphoria."
          />
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="lg:mt-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4">
              Apple iPhone 15. Newphoria.
            </h1>

            <div className="flex items-center gap-2 text-xl sm:text-2xl mb-5 text-amber-500">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStarHalf />
              <span className="text-gray-600 text-lg sm:text-xl ml-2">
                4.0 | 4000 sold
              </span>
            </div>

            <p className="text-4xl sm:text-5xl font-bold text-red-600 mb-4">
              AU$ 519.99
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

