import React from 'react'
import Image from 'next/image'
import HeroBannerHeader from './HeroBannerHeader'
import HeroBannerCalculator from './HeroBannerCalculator'

const HeroBanner = () => {
  return (
    <div className='mt-32'>
    <div className='w-[1156px] bg-[#2852E4] rounded-[2.5rem] pb-[370px] px-4 relative'>
        <HeroBannerHeader />
        <HeroBannerCalculator />
    </div>
    </div>
  )
}

export default HeroBanner