'use server'
import React from 'react'
import Iphones from './iphones'
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
const page = async() => {
    const session = await auth();
  if (!session) {
      redirect("/auth/signin");
    }
  return (
    <main>
      <Iphones/>
    </main>
  )
}

export default page
