'use server'
import React from 'react'
import Tablets from './tablets'
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
const page = async () => {
     const session = await auth();
    if (!session) {
        redirect("/auth/signin");
      }
  return (
    <main>
      <Tablets/>
    </main>
  )
}

export default page
