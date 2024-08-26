import { ArticlesListProps } from '@/constants/constants'
import arrowLeftIcon from '@/public/assets/icon/arrowLeft.svg'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ArticleCardProps {
    article: ArticlesListProps
}

const ArticleCard: React.FC<ArticleCardProps> = ({article}) => {
  return (
    <div className='h-[460px] w-96 transition-all duration-200 cursor-pointer rounded-2xl shadow-3xl flex flex-col shadow-2xl gap-y-3 p-5 relative'>
    <Image src={article.img} alt={article.title} className=' rounded-2xl'/>
    <p className='font-[vazirBold] text-[17px]'>{article.title}</p>
    <p className='text-sm leading-6'>{article.description}</p>
    <Link href={"/"} className='absolute bottom-5 left-5 flex justify-center items-center gap-x-0 flex-nowrap'><p className='text-[#2852E4] font-[vazirBold]'>بیشتر</p><Image src={arrowLeftIcon} alt='arrowLeftIcon' /></Link>
    </div>
  )
}

export default ArticleCard