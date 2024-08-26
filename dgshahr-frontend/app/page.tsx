import HeroBanner from '@/components/heroBanner/HeroBanner'
import MainPage from '@/components/main/MainPage'
import React from 'react'

const page = () => {
  return (
    <div className='w-full flex flex-col justify-start items-center'>
      <HeroBanner />
      <MainPage />
    </div>
  )
}

export default page