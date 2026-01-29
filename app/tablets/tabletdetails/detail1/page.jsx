'use server'
import React from 'react'
import Preview from './preview'
import { redirect } from 'next/navigation'
import { auth } from '@/auth'

const page = async () => {
     const session = await auth();
    if (!session) {
        redirect("/auth/signin");
      }
  return (
    <main>
      <Preview/>
    </main>
  )
}

export default page
