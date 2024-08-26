import React from 'react'
import SectionBox from './SectionBox'
import Image from 'next/image'
import VideoCover from '@/public/assets/img/video_cover.webp'
import arrowLeftIcon from '@/public/assets/icon/arrowLeft.svg'
import arrowDownIcon from '@/public/assets/icon/arrowDown.svg'
import Link from 'next/link'
import { CardLists, CategoryList, documentLists, StepList } from '@/constants/constants'
import ProfitsPart from './ProfitsPart'
import CommentsContainer from './comments/CommentsContainer'
import ArticlesContainer from './articles/ArticlesContainer'
import QuestionsContainer from './questions/QuestionsContainer'
import DocumentContainer from './document/DocumentContainer'
import StepContainer from './steps/StepContainer'
import CardsContainer from './cards/CardsContainer'
import CategoriesContainer from './categories/CategoriesContainer'
import GuidesContainer from './guides/GuidesContainer'

const MainPage = () => {
  return (
    <div className='min-h-screen mt-44 space-y-24 w-full flex flex-col items-center'>
    <SectionBox title='راهنمای درخواست وام' >
    <GuidesContainer />
    </SectionBox>

    <SectionBox title='دسته‌بندی محصولات' >
    <CategoriesContainer />
    </SectionBox>

    <SectionBox title='شرایط دریافت اعتبار' >
    <CardsContainer />
    </SectionBox>

    <SectionBox title='مراحل درخواست وام' >
    <StepContainer />
    </SectionBox>

    <SectionBox title="مدارک لازم برای دریافت وام کالا" >
    <DocumentContainer />
    </SectionBox>

    <ProfitsPart />

    <SectionBox title="نظرات مشتریان" >
    <CommentsContainer />
    </SectionBox>

    <SectionBox title="جدیدترین مقالات دیجی شهر" >
    <ArticlesContainer />
    </SectionBox>

    <SectionBox title="سوالات متداول" >
    <QuestionsContainer />
    </SectionBox>
    </div>
  )
}

export default MainPage