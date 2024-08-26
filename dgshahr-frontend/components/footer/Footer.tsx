import React from 'react'
import LogoImg from "@/public/assets/img/logo.webp"
import LinkedIn from "@/public/assets/icon/LinkedIn.svg"
import Instagram from "@/public/assets/icon/Instagram.svg"
import arrowUp from "@/public/assets/icon/arrowUp.svg"
import Image from 'next/image'
import { FooterItems } from '@/constants/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='w-full bg-[#F1F5F9] flex justify-center relative pb-24'>
        <div className='w-[1156px]'>
        <div className='flex justify-between items-center h-[80px] border-b border-b-[#E6E6E6]'>
        <Image src={LogoImg} alt='LogoImg' className='h-[32px] w-[166px]'/>
        <div className='flex items-center justify-end gap-x-8 '>
        <div className='flex gap-x-3'><p className='text-[#475569] text-sm'>تلفن پشتیبانی</p><p className='text-[#334155] font-[vazirBold] text-xl'>۰۲۱-۹۱۰۰۱۰۲۲</p></div>
        <Image src={Instagram} alt='Instagram' width={24} height={24}/>
        <Image src={LinkedIn} alt='LinkedIn' width={24} height={24}/>
        </div>
        </div>
        <div className='flex justify-between items-center border-b border-b-[#E6E6E6] py-10'>
        <div className='w-1/2 flex justify-between items-start text-right'>
        <ul className='text-[#334155] flex flex-col gap-y-5 text-sm'>
            <li className='font-[vazirBold] text-md'>با دیجی شهر</li>
            {FooterItems.moreInfo.map(item => (
                <Link href={item.address}><li>{item.name}</li></Link>
             ))}
        </ul>
        <ul className='text-[#334155] flex flex-col gap-y-5 text-sm'>
            <li className='font-[vazirBold] text-md'>راهنما</li>
            {FooterItems.helpList.map(item => (
                <Link href={item.address}><li>{item.name}</li></Link>
             ))}
        </ul>
        </div>
        <div className='flex flex-row-reverse justify-center items-center gap-x-3'>
            {FooterItems.trustImages.map(imgUrl => (
                <Image src={imgUrl} alt='img' className='border border-[#E6E6E6] w-20 rounded-lg'/>
            ))}
        </div>
        </div>
        <div className='space-y-4 py-10'>
            <h2 className='text-[#64748B] text-2xl font-[vazirBold]'>مزایای خرید قسطی از دیجی شهر</h2>
            <p className='text-[#64748B]'>خرید قسطی کالا یکی از گزینه‌های بسیار مناسب برای کسانی است که در حال حاضر به صورت نقدی نمی‌توانند کالای مورد نیاز خود را خریداری کنند. متقاضیان می‌توانند با دریافت وام آنلاین به راحتی و با کارمزد پایین تر در مقایسه با رقبا خرید اقساطی خود را انجام دهند.</p>
        <div className='py-4 flex flex-col gap-y-4'>
            <h2 className='text-[#64748B] text-lg font-[vazirBold]'>وام بدون پیش پرداخت</h2>
            <Link href={"/"} className='text-[#2852E4] text-xl font-[vazirBold]'>بیشتر</Link>
        </div>
        </div>
        </div>
        <div className='absolute bottom-0 left-0 right-0 w-full h-24 bg-[#E2E8F0] flex justify-center items-center'>
            <div className='w-[1156px] flex justify-between items-center'>
            <p>کلیه حقوق مادی و معنوی متعلق به شرکت نوآوران تجارت گستر فرین (دیجی‌شهر) می باشد.</p>
            <button className='border border-[rgb(203,213,225)] rounded-md px-6 py-2 flex flex-nowrap gap-x-2 hover:opacity-65'>بازگشت به بالا <Image src={arrowUp} alt='arrowUp' /></button>
            </div>
        </div>
    </div>
  )
}

export default Footer