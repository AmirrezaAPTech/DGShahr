'use client';

import { useState, useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { formatMoney } from '@/lib/formatMoney';

interface LoanCalculatorProps {
    amount: number;
    setAmount: (x: number) => void;
    duration: number;
    setDuration: (x: number) => void;
}

const LoanCalculator: React.FC<LoanCalculatorProps> = ({amount, setAmount, duration, setDuration}) => {

  const durationItems = [12, 24, 36, 48, 60];
  const swiperRef = useRef<any>(null);

  const handleSlideChange = () => {
    if (swiperRef.current) {
      const index = swiperRef.current.swiper.activeIndex;
      setDuration(durationItems[index]);
    }
  };

  const handleButtonClick = (item: number, index: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
    setDuration(item);
  };

  return (
    <div className="col-span-5 border-l border-[#CCCCCC] px-6 space-y-10">
      <div className="flex flex-col justify-start gap-y-8">
        <div className="flex justify-between items-center">
          <h2 className="text-xl text-[#102C8F] font-[vazirBold]">میزان وام درخواستی:</h2>
          <p className="text-teal-500 ">
            <span className="text-teal-500 text-3xl font-bold font-[vazirBold]">{formatMoney(amount)} </span>
            <span>تومان</span>
          </p>
        </div>
        <div className="flex items-center justify-between gap-x-1">
          <span className="text-nowrap text-[#009B9D]">10 میلیون</span>
          <input
            type="range"
            min={10000000}
            max={200000000}
            step={1000000}
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
            className="w-full bg-[#ECECEC] appearance-none cursor-pointer rounded-2xl h-2"
          />
          <span className="text-nowrap text-[#009B9D]">200 میلیون</span>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-xl text-[#102C8F] font-[vazirBold]">مدت بازپرداخت:</h2>
        <div className="flex items-center justify-center gap-x-8 mt-6">
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            navigation={true}
            onSlideChange={handleSlideChange}
            modules={[Navigation]}
            className="mySwiper text-center px-32"
            ref={swiperRef}
          >
            {durationItems.map((item: number, index: number) => (
              <SwiperSlide key={item}>
                <button
                  className={`px-6 py-3 transition ${
                    item === duration
                      ? 'font-[vazirBold] bg-[#F0F3FF] text-2xl text-[#2852E4] border rounded-2xl border-blue-500 cursor-pointer hover:opacity-60'
                      : 'text-[#CCCCCC]'
                  }`}
                  onClick={() => handleButtonClick(item, index)}
                >
                  {item} ماهه
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LoanCalculator;
