import { CategoryList } from '@/constants/constants'
import Image from 'next/image'
import React from 'react'

const CategoriesContainer = () => {
  return (
    <div className='flex flex-row-reverse justify-center items-center'>
    {CategoryList.map(category => (
        <div className='flex flex-col items-center justify-center w-[150px] h-[200px] gap-y-4'>
            <Image src={category.imgUrl} alt={category.name} className='w-[130px] hover:w-[140px] h-[130px] hover:h-[140px] transition-all duration-200 cursor-pointer' />
            <p className='text-lg font-[vazirBold]'>{category.name}</p>
        </div>
    ))}
</div>
  )
}

export default CategoriesContainer