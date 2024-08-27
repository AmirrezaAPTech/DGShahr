import Image from 'next/image'
import React from 'react'
import sidebarIcon from '@/public/assets/icon/sidebar.svg'
import xMarkIcon from '@/public/assets/icon/xMark.svg'
import LogoImg from "@/public/assets/img/logo.webp"
import { HeaderLinkProps, HeaderLinks } from '@/constants/constants'
import Link from 'next/link'

const Sidebar = () => {
  return (
    <div className="drawer drawer-start">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer-4" className="drawer-button cursor-pointer">
        <Image src={sidebarIcon} alt="sidebarIcon" />
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-white text-base-content min-h-full w-80 p-4 flex justify-start items-start relative">
      <li className='pb-5'> <Image src={LogoImg} alt='LogoImg' className='w-[200px]'/></li>
      {HeaderLinks.map((link: HeaderLinkProps) => (
              <li key={link.name} className='border-t border-[#EEEEEE] w-full flex justify-start items-start h-[57px]'><Link href={link.url} key={link.name} className='relative flex justify-start items-center text-sm text-[#68788E] font-[vazirBold] header-links-animation h-full hover:text-[#2852E4]'>{link.name}</Link></li>
      ))}
    <label htmlFor="my-drawer-4" className="drawer-button cursor-pointer absolute top-4 left-4">
        <Image src={xMarkIcon} alt="xMarkIcon" />
    </label>
    </ul>
  </div>
</div>
  )
}

export default Sidebar