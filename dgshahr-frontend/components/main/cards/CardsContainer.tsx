import { CardLists } from '@/constants/constants'
import arrowLeftIcon from '@/public/assets/icon/arrowLeft.svg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardsContainer = () => {
  return (
    <div className='flex flex-col w-full'>
    <div className='flex xl:flex-row-reverse lg:justify-center justify-start items-center max-xl:overflow-x-auto'>
        {CardLists.map((card, index) => (
            <div key={index} className='flex-shrink-0 w-[320px] h-[450px]'>
            <Image src={card} alt="CardImg" className='w-[300px] h-auto transition-all duration-200 cursor-pointer hover:w-[320px]'/>
            </div>
        ))}
    </div>
    <div className='lg:flex justify-center items-center gap-x-9 space-y-3'>
        <p className='max-lg:text-center'>میزان سقف دریافت وام بستگی به <span className='font-[vazirBold]'> رتبه اعتباری </span>و <span className='font-[vazirBold]'>نوع ضمان </span>شما دارد که می‌تواند تا <span className='font-[vazirBold]'>۲۰۰</span> میلیون تومان باشد.</p>
        <Link href={"/"} className='flex lg:justify-start justify-center items-center gap-x-1 '><p className='text-[#2852E4]'>ثبت درخواست وام</p><Image src={arrowLeftIcon} alt='arrowLeftIcon' /></Link>
    </div>
        </div>
  )
}

export default CardsContainer