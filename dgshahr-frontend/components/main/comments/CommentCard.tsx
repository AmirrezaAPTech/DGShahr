import Image from 'next/image'
import React from 'react'
import circledUser from '@/public/assets/icon/circledUser.svg'
import { CommentsListProps } from '@/constants/constants'

interface CommentCardProps {
    comment: CommentsListProps
}

const CommentCard: React.FC<CommentCardProps> = ({comment}) => {
  return (
    <div className='w-[370px] min-h-[240px] rounded-xl shadow-2xl py-4 overflow-hidden relative'>
        <div className='flex justify-between border-b border-b-[#cccccc8e] px-4 pb-2'>
        <div className='flex justify-center items-center gap-x-2'>
            <Image src={circledUser} alt="circledUser" />
            <p className='text-sm'>{comment.name}</p>
        </div>
        <div className='bg-[#F0F3FF] px-2 py-1 text-[#2852E4] rounded-lg text-center'>وام <span className='font-[vazirBold]'>{comment.price}</span> میلیونی</div>
        </div>
        <div className='pr-4 flex justify-start items-start pt-4'>
            <div className=' w-7/12'>
        <p className='text-sm text-right text-[#748297] leading-6'>{comment.description}</p>
            </div>
            <Image src={comment.img} alt='commentImg' className='absolute bottom-0 left-0'/>
        </div>
    </div>
  )
}

export default CommentCard