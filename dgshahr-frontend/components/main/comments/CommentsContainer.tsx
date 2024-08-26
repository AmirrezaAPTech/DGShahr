'use client'
import { CommentsList, CommentsListProps } from '@/constants/constants'
import React, { useState } from 'react'
import CommentCard from './CommentCard'
import Image from 'next/image'
import chevronDownIcon from '@/public/assets/icon/chevronDown.svg'
import chevronUpIcon from '@/public/assets/icon/chevronUp.svg'

const CommentsContainer = () => {
    const [commentsVisible, setCommentsVisible] = useState<boolean>(false)
  return (
    <div className='flex flex-col items-center mb-20'>
    <div className={`grid grid-cols-3 w-[1156px] gap-12 ${commentsVisible ? "" : "h-96 overflow-hidden bg-white opacity-60"}`}>
        {CommentsList.map((comment: CommentsListProps) => (
            <CommentCard comment={comment} />
        ))}
    </div>
    <div onClick={() => setCommentsVisible(!commentsVisible)} className='flex justify-center items-center gap-x-2 mt-10 cursor-pointer'>
        <p className='font-[vazirBold] text-sm text-[#2852E4]'>{commentsVisible ? "بستن" : "مشاهده همه"}</p>
        <Image src={commentsVisible ?  chevronUpIcon : chevronDownIcon} alt="chevron" className='w-5'/>
    </div>
    </div>
  )
}

export default CommentsContainer