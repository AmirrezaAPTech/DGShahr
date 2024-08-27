import React, { useState } from 'react'
import arrowUp from "@/public/assets/icon/arrowUp.svg"
import Image from 'next/image'
import { FooterItems } from '@/constants/constants'
import Link from 'next/link'
import MoreInfo from './MoreInfo'
import chevronDownIcon from '@/public/assets/icon/chevronDown.svg'
import chevronUpIcon from '@/public/assets/icon/chevronUp.svg'
import FooterHead from './FooterHead'
import FooterMain from './FooterMain'
import FooterBenefits from './FooterBenefits'

const Footer = () => {

  return (
    <div className='w-full bg-[#F1F5F9] flex justify-center relative pb-24'>
        <div className='xl:w-[1156px] max-xl:px-20 max-md:px-10 max-sm:px-3 w-full'>
        <FooterHead />
        <FooterMain />
        <FooterBenefits />
        </div>
        <div className='absolute bottom-0 left-0 right-0 w-full h-24 bg-[#E2E8F0] flex justify-center items-center max-xl:px-10 max-sm:px-1'>
            <div className='w-[1156px] flex justify-between items-center'>
            <p className='md:text-md sm:text-sm text-[10px] '>کلیه حقوق مادی و معنوی متعلق به شرکت نوآوران تجارت گستر فرین (دیجی‌شهر) می باشد.</p>
            <button className='border border-[rgb(203,213,225)] rounded-md px-6 py-2 flex flex-nowrap gap-x-2 hover:opacity-65'><span className='max-md:hidden text-nowrap'>بازگشت به بالا </span><Image src={arrowUp} alt='arrowUp' /></button>
            </div>
        </div>
    </div>
  )
}

export default Footer