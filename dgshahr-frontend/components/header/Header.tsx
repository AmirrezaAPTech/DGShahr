import React from 'react'
import Image from 'next/image'
import LogoImg from "@/public/assets/img/logo.webp"
import Link from 'next/link'
import { HeaderLinks, HeaderLinkProps } from '@/constants/constants'
import ButtonBox from '../ButtonBox'
import Sidebar from '../sidebar/Sidebar'

const Header = () => {
  return (
    <div className='w-full h-[72px] shadow-sm bg-white sticky z-50 top-0 left-0 right-0 border-b border-b-[#E6E6E6] flex justify-center items-center max-xl:px-16 max-sm:px-2'>
        <nav className='w-[1156px] h-full flex justify-between items-center'>
            <div className='flex items-center gap-x-7 px-4 h-full'>
                <div className='xl:hidden'><Sidebar /></div>
                <Image src={LogoImg} alt='LogoImg' className='lg:h-[32px] sm:h-[25px] h-[20px] lg:w-[166px] w-auto'/>
                <div className='xl:flex items-center gap-x-7 h-full hidden'>
                {HeaderLinks.map((link: HeaderLinkProps) => (
                    <Link href={link.url} key={link.name} className='relative flex justify-center items-center text-sm text-[#68788E] font-[vazirBold] header-links-animation h-full hover:text-[#2852E4]'>{link.name}
                    </Link>
                ))}</div> 
            </div>
            <ButtonBox title='درخواست وام' customStyle='bg-[#2852E4] hover:bg-opacity-80 text-white max-sm:max-w-24' />
        </nav>
    </div>
  )
}

export default Header