'use server'
import React from 'react'
import Android from './android'
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
const page = async () => {
     const session = await auth();
    if (!session) {
        redirect("/auth/signin");
      }
  return (
    <main>
      <Android/>
    </main>
  )
}

export default page
