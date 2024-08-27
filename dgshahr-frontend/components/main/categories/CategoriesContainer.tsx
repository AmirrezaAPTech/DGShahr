import { CategoryList } from '@/constants/constants'
import Image from 'next/image'
import React from 'react'

const CategoriesContainer = () => {
  return (
      <div className='flex lg:flex-row-reverse lg:justify-center justify-start w-full items-center max-xl:overflow-x-auto'>
    {CategoryList.map(category => (
        <div key={category.name} className='flex-shrink-0 flex flex-col items-center justify-center w-[150px] h-[200px] gap-y-4'>
            <Image src={category.imgUrl} alt={category.name} className='w-[130px] hover:w-[140px] h-[130px] hover:h-[140px] transition-all duration-200 cursor-pointer' />
            <p className='text-lg font-[vazirBold]'>{category.name}</p>
        </div>
    ))}</div>
  )
}

export default CategoriesContainer