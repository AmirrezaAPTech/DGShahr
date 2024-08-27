import React from 'react'
import Image from 'next/image'
import HeroImg from '@/public/assets/img/heroImage.webp'
import ButtonBox from '../ButtonBox'

const HeroBannerHeader = () => {
  return (
    <div className='lg:grid lg:grid-cols-10 sm:px-5 gap-x-24 max-lg:my-10'>
    <div className='lg:col-span-5 lg:h-[400px] max-lg:text-center text-white hero-image-bg-sm flex flex-col lg:items-start items-center justify-center gap-y-8  max-lg:hero-image-bg-sm'>
        <h2 className='lg:text-[52px] text-3xl font-[vazirBold] font-extrabold text-nowrap'>خریدی که اعتبار دارد</h2>
        <p className='lg:text-2xl text-xl'>دریافت وام و خرید اقساطی کالا</p>
        <Image src={HeroImg} alt='HeroImg' className='sm:h-[390px] h-auto w-auto lg:hidden'/>
        <div className='flex justify-between items-center gap-x-4 max-sm:w-full max-sm:px-2 max-[350px]:pb-8'>
        <ButtonBox title='ثبت درخواست وام' customStyle='bg-white text-[#2852E4] border-2 border-white hover:shadow-2xl hover:shadow-white' />
        <ButtonBox title='فروشگاه دیجی شهر' customStyle='border-2 border-white hover:bg-opacity-40 hover:bg-white' />
        </div>
    </div>
    <div className='lg:col-span-5 pl-4 lg:flex hidden justify-center items-center hero-image-bg pt-10'>
    <Image src={HeroImg} alt='HeroImg' className='h-[390px] w-auto '/>
    </div>
</div>
  )
}

export default HeroBannerHeader