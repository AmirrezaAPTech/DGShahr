import React from 'react'
import Image from 'next/image'
import HeroImg from '@/public/assets/img/heroImage.webp'
import ButtonBox from '../ButtonBox'

const HeroBannerHeader = () => {
  return (
    <div className='grid grid-cols-10 px-5 gap-x-24'>
    <div className='col-span-5 h-[400px] text-white flex flex-col items-start justify-center gap-y-8 '>
        <h2 className='text-[52px] font-[vazirBold] font-extrabold'>خریدی که اعتبار دارد</h2>
        <p className='text-2xl'>دریافت وام و خرید اقساطی کالا</p>
        <div className='flex justify-between items-center gap-x-4'>
        <ButtonBox title='ثبت درخواست وام' customStyle='bg-white text-[#2852E4] border-2 border-white hover:shadow-2xl hover:shadow-white' />
        <ButtonBox title='فروشگاه دیجی شهر' customStyle='border-2 border-white hover:bg-opacity-40 hover:bg-white' />
        </div>
    </div>
    <div className='col-span-5 pl-4 flex justify-center items-center hero-image-bg pt-10'>
    <Image src={HeroImg} alt='HeroImg' className='h-[390px] w-auto '/>
    </div>
</div>
  )
}

export default HeroBannerHeader