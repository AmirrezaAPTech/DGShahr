import { QuestionsList } from '@/constants/constants'
import arrowLeftIcon from '@/public/assets/icon/arrowLeft.svg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const QuestionsContainer = () => {
  return (
    <div className='flex flex-col gap-y-3 justify-center items-center mb-16'>
        {QuestionsList.map(question => <div key={question.topic} className='w-full max-lg:px-2'>
     <div tabIndex={0} className="collapse collapse-arrow shadow bg-white border pr-3 py-3">
        <div className="collapse-title text-md font-[vazirBold] text-[#475569] flex justify-start items-center gap-x-2">{question.topic}</div>
        <div className="collapse-content text-[#009B9D]">
            <p>{question.detail}</p>
        </div>
        </div></div>)}
        <div className='w-full ml-7 mt-5'>
    <Link href={"/"} className='flex justify-end items-center gap-x-2 flex-nowrap'><p className='text-[#2852E4] font-[vazirBold]'>مشاهده همه سوالات</p><Image src={arrowLeftIcon} alt='arrowLeftIcon' className='w-5'/></Link>
    </div>
    </div>
  )
}

export default QuestionsContainer