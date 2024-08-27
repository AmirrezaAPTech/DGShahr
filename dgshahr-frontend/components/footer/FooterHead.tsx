import React from 'react'
import LogoImg from "@/public/assets/img/logo.webp"
import LinkedIn from "@/public/assets/icon/LinkedIn.svg"
import Instagram from "@/public/assets/icon/Instagram.svg"
import Image from 'next/image'

const FooterHead = () => {
  return (
    <div className='flex justify-between items-center h-[80px] border-b border-b-[#E6E6E6]'>
    <Image src={LogoImg} alt='LogoImg' className='h-[32px] w-[166px]'/>
    <div className='flex items-center justify-end gap-x-8 max-sm:hidden'>
    <div className='flex gap-x-3'><p className='text-[#475569] text-sm'>تلفن پشتیبانی</p><p className='text-[#334155] font-[vazirBold] text-xl'>۰۲۱-۹۱۰۰۱۰۲۲</p></div>
    <Image src={Instagram} alt='Instagram' width={24} height={24}/>
    <Image src={LinkedIn} alt='LinkedIn' width={24} height={24}/>
    </div>
    </div>
  )
}

export default FooterHead