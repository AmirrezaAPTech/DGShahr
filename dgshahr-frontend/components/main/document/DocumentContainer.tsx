import { documentLists } from '@/constants/constants'
import Image from 'next/image'
import React from 'react'

const DocumentContainer = () => {
  return (
    <div className='flex xl:flex-row-reverse xl:justify-center items-center xl:gap-12 gap-5 max-xl:overflow-x-auto max-xl:px-6 w-full'>
    {documentLists.map(doc =>(
        <div key={doc.name} className='flex-shrink-0 w-[240px] h-[230px] flex items-end relative'>
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