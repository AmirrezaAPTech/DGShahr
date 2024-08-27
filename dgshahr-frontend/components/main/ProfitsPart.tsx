import Image from 'next/image'
import React from 'react'
import arrowDownIcon from '@/public/assets/icon/arrowDown.svg'
import { ProfitsList } from '@/constants/constants'

const ProfitsPart = () => {
  return (
    <div className='pt-20 w-full'>
    <div className='flex flex-col items-center justify-start gap-y-4 py-12 bg-[#2852E4] w-full curve shadow-2xl'>
    <p className=' text-white font-[vazirBold]'>مزایای خرید قسطی از دیجی‌شهر</p>
    <Image src={arrowDownIcon} alt='arrowDownIcon' className='image-bounce' />
    <div className='xl:flex xl:flex-row-reverse lg:grid grid-cols-2 max-lg:flex flex-col xl:justify-between justify-start xl:items-end items-start gap-x-5 gap-y-10 xl:w-[1156px] w-full py-12 px-12'>
        {ProfitsList.map(profit => (
            <div key={profit.title} className='flex lg:justify-center justify-start items-center gap-x-2'>
                <div className='bg-white p-3 rounded-xl'>
                    <Image src={profit.icon} alt={profit.title} />
                </div>
                <div className='space-y-1'>
                    <p className='text-white text-lg font-[vazirBold]'>{profit.title}</p>
                    <p className='text-white text-sm'>{profit.description}</p>
                </div>
            </div>
        ))}
    </div>
        </div>
    </div>
  )
}

export default ProfitsPart