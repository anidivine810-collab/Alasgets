'use server'
import React from 'react'
import Preview from './preview'
import { redirect } from 'next/navigation'

const page = async () => {
  return (
    <main>
      <Preview/>
    </main>
  )
}

export default page
