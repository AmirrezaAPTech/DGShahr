import { documentLists } from '@/constants/constants'
import Image from 'next/image'
import React from 'react'

const DocumentContainer = () => {
  return (
    <div className='flex flex-row-reverse justify-center items-center gap-12'>
    {documentLists.map(doc =>(
        <div className='w-[240px] h-[230px] flex items-end relative'>
            <div className='absolute top-0 w-full flex justify-center'>
            <Image src={doc.icon} alt={doc.name} className='w-[160px]'/>
            </div>
            <div className='bg-[#F0F3FF] w-[240px] h-[140px] rounded-3xl flex flex-col justify-center items-center'>
                <p className='text-[#2852E4] font-[vazirBold]'>{doc.name}</p>
                <span className='text-sm text-[#5776e9]'>{doc?.span}</span>
            </div>
        </div>
    ))}
        </div>
  )
}

export default DocumentContainer