import React from 'react'

interface ButtonBoxProps {
    title: string,
    customStyle: string
}

const ButtonBox: React.FC<ButtonBoxProps> = ({title, customStyle}) => {
  return (
    <button className={`text-sm sm:px-10 max-sm:w-full py-[12px] font-[vazirBold] rounded-lg transition-all duration-200 text-nowrap ${customStyle}`}>{title}</button>
  )
}

export default ButtonBox