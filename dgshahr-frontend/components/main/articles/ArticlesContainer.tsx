import { ArticlesList, ArticlesListProps } from '@/constants/constants'
import arrowLeftIcon from '@/public/assets/icon/arrowLeft.svg'
import React from 'react'
import ArticleCard from './ArticleCard'
import Link from 'next/link'
import Image from 'next/image'

const ArticlesContainer = () => {
  return (
    <div className='w-full space-y-9'>
    <div className='w-full flex justify-between items-center xl:flex-row-reverse gap-x-12 max-xl:overflow-x-auto no-scrollbar xl:pb-12 max-sm:px-2'>
        {ArticlesList.map((article : ArticlesListProps) => (
            <ArticleCard key={article.title} article={article} />
        ))
        }
    </div>
    <div className='w-full'>
    <Link href={"/"} className='flex justify-end items-center gap-x-2 flex-nowrap max-xl:pl-4'><p className='text-[#2852E4]'>مشاهده همه</p><Image src={arrowLeftIcon} alt='arrowLeftIcon' className='w-4'/></Link>
    </div>
    </div>
  )
}

export default ArticlesContainer