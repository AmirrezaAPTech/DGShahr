import React from 'react'
import Image from 'next/image'
import HeroBannerHeader from './HeroBannerHeader'
import HeroBannerCalculator from './HeroBannerCalculator'

const HeroBanner = () => {
  return (
    <div className='lg:mt-32 mt-[72px] max-xl:mx-20 max-lg:mx-0 max-lg:w-full h-full lg:pb-0 sm:pb-52 pb-72 '>
    <div className='xl:w-[1156px] w-full bg-[#2852E4] lg:rounded-[2.5rem] relative rounded-b-[2.5rem] pb-[370px] sm:px-4 max-lg:flex max-lg:justify-center'>
        <HeroBannerHeader />
        <HeroBannerCalculator />
    </div>
    </div>
  )
}

export default HeroBanner