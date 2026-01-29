"use server"
import React from 'react'
import Watches from './watches'
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
const page = async () => {
     const session = await auth();
    if (!session) {
        redirect("/auth/signin");
      }
  return (
    <main>
      <Watches/>
    </main>
  )
}

export default page
