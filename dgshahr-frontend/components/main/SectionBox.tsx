import React, { ReactNode } from 'react'
import arrowDownIcon from '@/public/assets/icon/arrowDown.svg'
import Image from 'next/image'

interface SectionBoxProps {
    children: ReactNode;
    title: string;
}

const SectionBox: React.FC<SectionBoxProps> = ({children, title}) => {
  return (
    <div className='flex flex-col justify-start items-center gap-y-6 mt-5 px-6 w-[1156px]'>
        <div className='flex flex-col items-center justify-start gap-y-4'>
        <p className=' text-black text-[26px] font-[vazirBold]'>{title}</p>
        <Image src={arrowDownIcon} alt='arrowDownIcon' className='image-bounce' />
        </div>
        {children}
    </div>
  )
}

export default SectionBox