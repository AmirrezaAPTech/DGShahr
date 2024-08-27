import React from 'react'
import LinkedIn from "@/public/assets/icon/LinkedIn.svg"
import Instagram from "@/public/assets/icon/Instagram.svg"
import Link from 'next/link'
import { FooterItems } from '@/constants/constants'
import Image from 'next/image'

const FooterMain = () => {
  return (
    <div className='flex max-md:flex-col justify-between items-center border-b border-b-[#E6E6E6] py-10 max-md:gap-y-10'>
    <div className='md:w-1/2 w-full flex max-sm:flex-col max-sm:gap-y-12 justify-between items-start text-right'>
    <ul className='text-[#334155] flex flex-col gap-y-5 text-sm'>
        <li className='font-[vazirBold] text-md'>با دیجی شهر</li>
        {FooterItems.moreInfo.map(item => (
            <Link key={item.name} href={item.address}><li>{item.name}</li></Link>
         ))}
    </ul>
    <ul className='text-[#334155] flex flex-col gap-y-5 text-sm'>
        <li className='font-[vazirBold] text-md'>راهنما</li>
        {FooterItems.helpList.map(item => (
            <Link key={item.name} href={item.address}><li>{item.name}</li></Link>
         ))}
    </ul>
    </div>
    <div className='flex flex-col items-center justify-end gap-y-8 sm:hidden'>
    <div className='flex justify-center items-center gap-x-8'>
    <Image src={Instagram} alt='Instagram' width={24} height={24}/>
    <Image src={LinkedIn} alt='LinkedIn' width={24} height={24}/>
    </div>
    <div className='flex gap-x-3'><p className='text-[#475569] text-sm'>تلفن پشتیبانی</p><p className='text-[#334155] font-[vazirBold]'>۰۲۱-۹۱۰۰۱۰۲۲</p></div>
    </div>
    <div className='flex flex-row-reverse md:justify-center justify-between w-full items-center gap-x-3'>
        {FooterItems.trustImages.map((imgUrl, index) => (
            <Image key={index} src={imgUrl} alt='img' className='border border-[#E6E6E6] w-20 rounded-lg'/>
        ))}
    </div>
    </div>
  )
}

export default FooterMain