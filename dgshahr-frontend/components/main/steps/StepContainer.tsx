import { StepList } from '@/constants/constants'
import Image from 'next/image'
import React from 'react'

const StepContainer = () => {
  return (
    <div className='grid grid-cols-2 gap-16'>
    {   StepList.map(step =><div className='relative w-full'>
        <div className='px-3 py-1 bg-[#2852E4] text-white absolute -right-4 top-4 font-bold z-10 text-lg rounded-xl flex justify-center items-center'>{step.number}</div>
         <div tabIndex={0} className="collapse collapse-arrow shadow bg-white border pr-3">
            <div className="collapse-title text-md font-[vazirBold] text-[#2852E4] flex justify-start items-center gap-x-2"><Image src={step.icon} alt={step.name} />{step.name}</div>
            <div className="collapse-content text-[#009B9D]">
                <p>{step.detail}</p>
            </div>
            </div></div>)}
            </div>
  )
}

export default StepContainer