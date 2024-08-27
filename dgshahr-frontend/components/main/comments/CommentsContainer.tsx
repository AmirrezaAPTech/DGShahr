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
    <div className='flex flex-col items-center mb-20 w-full'>
    <div className={`xl:grid xl:grid-cols-3 xl:w-[1156px] w-full flex max-xl:overflow-x-auto no-scrollbar max-sm:pb-16 xl:gap-y-12 xl:gap-x-4 gap-12 ${commentsVisible ? "" : "xl:h-96 xl:overflow-hidden xl:bg-white xl:opacity-60"}`}>
        {CommentsList.map((comment: CommentsListProps) => (
            <CommentCard key={comment.name} comment={comment} />
        ))}
    </div>
    <div onClick={() => setCommentsVisible(!commentsVisible)} className='xl:flex hidden justify-center items-center gap-x-2 mt-10 cursor-pointer'>
        <p className='font-[vazirBold] text-sm text-[#2852E4]'>{commentsVisible ? "بستن" : "مشاهده همه"}</p>
        <Image src={commentsVisible ?  chevronUpIcon : chevronDownIcon} alt="chevron" className='w-5'/>
    </div>
    </div>
  )
}

export default CommentsContainer