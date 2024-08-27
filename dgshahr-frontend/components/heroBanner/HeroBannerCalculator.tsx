'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import arrowDownIcon from '@/public/assets/icon/arrowDown.svg'
import ButtonBox from '../ButtonBox'
import LoanCalculator from './LoanCalculator'
import { formatMoney } from '@/lib/formatMoney'

const HeroBannerCalculator = () => {
    const [amount, setAmount] = useState<number>(10000000);
    const [duration, setDuration] = useState<number>(12);


  return (
    <div className='xl:w-[1156px] w-full absolute lg:-bottom-24 sm:-bottom-1/3 -bottom-[420px] left-0 right-0 flex flex-col justify-start items-center mt-5 md:px-8 px-4'>
        <div className='flex flex-col items-center justify-start gap-y-4'>
        <p className=' text-white font-[vazirBold]'>محاسبه اقساط دیجی شهر</p>
        <Image src={arrowDownIcon} alt='arrowDownIcon' className='image-bounce' />
        </div>
        <div className='lg:grid grid-cols-10 space-y-5 w-full bg-white rounded-3xl shadow-2xl mt-4 lg:px-4 py-8'>
                <LoanCalculator amount={amount} setAmount={setAmount} duration={duration} setDuration={setDuration}/>
            <div className='col-span-5 px-6 space-y-10 flex flex-col justify-start'>
                <div className='bg-[#EEF2FF] w-full rounded-2xl flex flex-col items-center justify-between px-4 py-6 gap-y-6'>
                    <div className='w-full flex justify-between items-center border-b border-b-[#2851e433] pb-3'>
                    <p className=' text-[#2852E4] lg:font-[vazirBold] lg:text-lg text-sm  max-xl:pl-8'>مبلغ قسط نهایی</p>
                    <p className='lg:text-2xl text-xl text-[#2852E4] font-[vazirBold]'>{formatMoney((amount / duration) + 140000)}<span className='lg:text-xl text-sm pr-2'>تومان</span></p>
                    </div>
                    <div className='w-full flex justify-between items-center border-b border-b-[#2851e433] pb-3'>
                    <p className=' text-[#2852E4] lg:font-[vazirBold] lg:text-lg text-sm  max-xl:pl-8'>مابه‌التفاوت خرید نقدی و قسطی</p>
                    <p className='lg:text-xl text-lg text-[#2852E4] font-[vazirBold]'>{formatMoney(amount / duration)}<span className='lg:text-xl text-sm pr-2'>تومان</span></p>
                    </div>
                    <div className='w-full flex justify-between items-center'>
                    <p className=' text-[#2852E4] lg:font-[vazirBold] lg:text-lg text-sm max-xl:pl-8'>اعتبار کیف پول فروشگاه</p>
                    <p className='lg:text-xl text-lg text-[#2852E4] font-[vazirBold] '>{formatMoney(amount -(amount / duration))}<span className='lg:text-xl text-sm pr-2'>تومان</span></p>
                    </div>
                </div>
                <ButtonBox title='درخواست وام' customStyle='bg-[#2852E4] text-white w-full' />
            </div>
        </div>
    </div>
  )
}

export default HeroBannerCalculator