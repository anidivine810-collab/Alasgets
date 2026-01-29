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
                <img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTPjQd6wyktjobXPh4Zc1vyLd_B9BdYK-MekyNTXN7iscJRswRQcdTGgCt5ZBJ5GPHIy3Pv5kDu3H3XTPcEEE1sxJPd7CqJtqoH5-fyBwqZRVfKyffrKEaxNbHvB3ztMFY1RKUt1eSRxA&usqp=CAc" 
                className="object-contain w-full h-full"
          alt="Samsung Galaxy Tab S10+ Plus/S9+/S9 FE+/S8+/S7+/S7 FE Keyboard Case 12.4“ Ma"
          />
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="lg:mt-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 lg:mb-4">
              Samsung Galaxy Tab S10+ Plus/S9+/S9 FE+/S8+/S7+/S7 FE Keyboard Case 12.4“ Ma
            </h1>

            <div className="flex items-center gap-2 text-xl sm:text-2xl mb-5 text-amber-500">
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStar />
              <IoIosStarHalf />
              <span className="text-gray-600 text-lg sm:text-xl ml-2">
                4.0 | 100 sold
              </span>
            </div>

            <p className="text-4xl sm:text-5xl font-bold text-red-600 mb-4">
              AU$ 180.99
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

