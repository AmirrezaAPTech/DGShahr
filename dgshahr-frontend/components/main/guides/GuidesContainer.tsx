import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import VideoCover from '@/public/assets/img/video_cover.webp'
import arrowLeftIcon from '@/public/assets/icon/arrowLeft.svg'

const GuidesContainer = () => {
  return (
    <div className='lg:grid lg:grid-cols-10 gap-x-5 sm:px-20 px-1 max-lg:flex max-lg:flex-col max-lg:justify-start max-lg:items-center w-full'>
    <div className='col-span-5'>
        <Image src={VideoCover} alt='VideoCover' className='sm:w-[430px] w-auto'/>
    </div>
    <div className="col-span-5 flex flex-col gap-y-12 pt-4">
        <p className='lg:text-right text-center'>
        برای اطلاع از نحوه ثبت درخواست وام فوری، فرآیند خرید قسطی از فروشگاه، دریافت وام بدون ضامن، اعتبارسنجی، ضمانت‌ها و امکانات دیگر دیجی‌شهر ویدئو را مشاهده کنید.
        </p>
        <p className='lg:text-right text-center'>
        همچنین برای دریافت اطلاعات بیشتر می‌توانید وارد صفحه راهنمای دیجی‌شهر شوید.
        </p>
        <Link href={"/"} className='flex lg:justify-start justify-center items-center gap-x-3 '><p className='text-[#2852E4] font-[vazirBold]'>صفحه راهنمای دیجی شهر</p><Image src={arrowLeftIcon} alt='arrowLeftIcon' /></Link>
    </div>
</div>
  )
}

export default GuidesContainer