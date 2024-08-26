import React from 'react'
import Image from 'next/image'
import HeroBannerHeader from './HeroBannerHeader'
import HeroBannerCalculator from './HeroBannerCalculator'

const HeroBanner = () => {
  return (
    <div className='w-[1156px] h-[85vh] bg-[#2852E4] rounded-[2.5rem] mt-32 px-4'>
        <HeroBannerHeader />
        <HeroBannerCalculator />
    </div>
  )
}

export default HeroBanner