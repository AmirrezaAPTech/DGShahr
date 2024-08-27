'use client'
import React, { useState } from 'react'
import MoreInfo from './MoreInfo'
import Image from 'next/image'
import chevronDownIcon from '@/public/assets/icon/chevronDown.svg'
import chevronUpIcon from '@/public/assets/icon/chevronUp.svg'

const FooterBenefits = () => {
    const [moreInfo, setMoreInfo] = useState<boolean>(false)
  return (
    <div className='space-y-4 py-5'>
    <div className={`${moreInfo ? "" : "h-64 overflow-hidden"}`}>
    <MoreInfo />
    </div>
    <div onClick={() => setMoreInfo(!moreInfo)} className='flex justify-start items-center gap-x-2 mt-10 cursor-pointer pr-4'>
<p className='font-[vazirBold] text-md text-[#2852E4]'>{moreInfo ? "بستن" : "بیشتر"}</p>
<Image src={moreInfo ?  chevronUpIcon : chevronDownIcon} alt="chevron" className='w-5'/>
    </div>
</div>
  )
}

export default FooterBenefits