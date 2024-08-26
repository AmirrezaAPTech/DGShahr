// Category Items
import SportCategory from '@/public/assets/img/cateory/category_sport.webp'
import CosmaticCategory from '@/public/assets/img/cateory/category_cosmatic.webp'
import DigitalCategory from '@/public/assets/img/cateory/category_digital.webp'
import FurnitureCategory from '@/public/assets/img/cateory/category_furniture.webp'
import MobileCategory from '@/public/assets/img/cateory/category_mobile.webp'
import MotorCategory from '@/public/assets/img/cateory/category_motor.webp'
import GoldCategory from '@/public/assets/img/cateory/Category20Gold.webp'
import ToolsCategory from '@/public/assets/img/cateory/category_tools.webp'

// Card Items
import firstCard from '@/public/assets/img/cards/card_one_cheque_one_wage.webp'
import secondCard from '@/public/assets/img/cards/card_wage.webp'
import thirdCard from '@/public/assets/img/cards/one_cheque.webp'
import forthCard from '@/public/assets/img/cards/two_cheque.webp'

// Steps
import penIcon from '@/public/assets/img/steps/edit_icon.webp'
import userIcon from '@/public/assets/img/steps/user_edit_icon.webp'
import rialIcon from '@/public/assets/img/steps/riyal_icon.webp'
import walletIcon from '@/public/assets/img/steps/wallet_icon.webp'
import documentIcon from '@/public/assets/img/steps/documents_icon.webp'

// Documents
import locationIcon from '@/public/assets/img/document/location_document.webp'
import useriIcon from '@/public/assets/img/document/useri_document.webp'
import fishIcon from '@/public/assets/img/document/fish_hoghooghi.webp'
import mojavezIcon from '@/public/assets/img/document/mojavez_faaliyat.webp'

// Profits
import calenderIcon from '@/public/assets/icon/calender.svg'
import usersIcon from '@/public/assets/icon/users.svg'
import cashIcon from '@/public/assets/icon/cash.svg'
import walletsIcon from '@/public/assets/icon/wallet.svg'

// Comments
import AlizadehTestimonial from '@/public/assets/img/comment/testimonial_alizadeh.webp'
import ArdakaniTestimonial from '@/public/assets/img/comment/testimonial_ardakani.webp'
import BanijavadTestimonial from '@/public/assets/img/comment/testimonial_banijavad.webp'
import KhodarahmiTestimonial from '@/public/assets/img/comment/testimonial_khodarahmi.webp'
import KhodaverdiTestimonial from '@/public/assets/img/comment/testimonial_khodaverdi.webp'
import MohammadiTestimonial from '@/public/assets/img/comment/testimonial_mohammadi.webp'
import NikpoorTestimonial from '@/public/assets/img/comment/testimonial_nikpoor.webp'
import RoomiTestimonial from '@/public/assets/img/comment/testimonial_roomi.webp'
import ShaterhoseiniTestimonial from '@/public/assets/img/comment/testimonial_shaterhoseini.webp'

// Article
import BeneliCover from '@/public/assets/img/article/beneli-TNT15-768x488.webp'
import LaptopCover from '@/public/assets/img/article/laptop.webp'
import FryCover from '@/public/assets/img/article/fry.webp'

import { StaticImageData } from 'next/image'

// HeaderLinks
export interface HeaderLinkProps {
    name: string
    url: string
}

export const HeaderLinks: HeaderLinkProps[] = [
    {
        name: "فروشگاه دیجی شهر",
        url: "/"
    },
    {
        name: "راهنمای دریافت وام",
        url: "/"
    },
    {
        name: "بلاگ",
        url: "/"
    },
    {
        name: "سوالات متداول",
        url: "/"
    },
]


// Categories

export interface CategoryListProps {
    imgUrl: StaticImageData
    name: string
}

export const CategoryList: CategoryListProps[] = [
    {
        imgUrl: SportCategory,
        name: "ورزش و سفر"
    },
    {
        imgUrl: CosmaticCategory,
        name: "آرایش بهداشتی"
    },
    {
        imgUrl: ToolsCategory,
        name: "ابزار صنعتی"
    },
    {
        imgUrl: FurnitureCategory,
        name: "لوازم خانگی"
    },
    {
        imgUrl: MotorCategory,
        name: "موتور سیکلت"
    },
    {
        imgUrl: DigitalCategory,
        name: "کالای دیجیتال"
    },
    {
        imgUrl: GoldCategory,
        name: "زیورآلات"
    },
    {
        imgUrl: MobileCategory,
        name: "موبایل"
    },
]

// CardLists

export const CardLists: StaticImageData[]  = [firstCard, secondCard, thirdCard, forthCard]

// Steps

interface StepListProps {
    name: string,
    detail: string,
    number: number,
    icon: StaticImageData
}

export const StepList: StepListProps[] = [
    {
        name: "ثبت درخواست ",
        detail: "با مراجعه به سایت دیجی‌شهر و کلیک روی گزینه درخواست وام، وارد پنل کاربری شوید.",
        number: 1,
        icon: penIcon
    },
    {
        name: "ثبت اطلاعات شخصی",
        detail: "بعد از ثبت درخواست، اطلاعات شخصی و شغلی خود را وارد ‌کنید.",
        number: 2,
        icon: userIcon
    },
    {
        name: "تعیین میزان وام درخواستی",
        detail: "در این مرحله با توجه به رتبه اعتباری خود، می‌توانید میزان اعتبار و تعداد ماه‌های بازپرداخت اقساط را انتخاب کنید.",
        number: 3,
        icon: rialIcon
    },
    {
        name: "بررسی مدارک",
        detail: "پس از بررسی‌ مدارک و اطلاعات‌ وارد شده، پشتیبانی دیجی‌شهر با شما تماس می‌گیرد و هماهنگی‌های لازم انجام می‌شود.",
        number: 4,
        icon: documentIcon
    },
    {
        name: "شارژ کیف پول",
        detail: "پس از تایید بانک، کیف پولتان در فروشگاه دیجی‌شهر شارژ شده و می‌توانید کالای دلخواه خود را به صورت قسطی خریداری کنید.",
        number: 5,
        icon: walletIcon
    },
]


// Documents

interface documentListsProps {
    name: string,
    icon: StaticImageData,
    span?: string
}

export const documentLists: documentListsProps[] = [
    {
        name: "تصاویر مدارک محل اقامت",
        icon: locationIcon
    },
    {
        name: "تصاویر شناسنامه و کارت ملی",
        icon: useriIcon
    },
    {
        name: "فیش حقوقی و معرفی‌نامه شغلی",
        span: "برای کارمندان",
        icon: fishIcon
    },
    {
        name: "تصاویر مجوز فعالیت",
        span: "برای صاحبان مشاغل",
        icon: mojavezIcon
    },
]


// Profits

interface ProfitsListProps {
    title: string;
    description: string;
    icon: StaticImageData
}

export const ProfitsList: ProfitsListProps[] = [
    {
        title: "بدون پیش پرداخت",
        description: "خرید کالا از دم قسط",
        icon: cashIcon
    },
    {
        title: "بدون ضامن",
        description: "دریافت اعتبار کالا حتی بدون ضامن",
        icon: usersIcon
    },
    {
        title: "بازپرداخت تا ۶۰ ماه",
        description: "بالا‌ترین مدت بازپرداخت",
        icon: calenderIcon
    },
    {
        title: "تا ۲۰۰ میلیون تومان ",
        description: "بالاترین اعتبار خرید اقساطی کالا",
        icon: walletsIcon
    },
]

// Comments

export interface CommentsListProps {
    name: string;
    price: number;
    description: string;
    img: StaticImageData;
}

export const CommentsList: CommentsListProps[] = [
    {
        name: "آقای علیرضا زاده",
        price: 80,
        description: "من 80 میلیون تومان 60 ماهه اعتبار دریافت کردم و با موجودی کیف پولم، تلفن همراه خریدم که دو هفته‌ای به دستم رسید.",
        img: AlizadehTestimonial
    },
    {
        name: "آقای شاطر حسینی",
        price: 199,
        description: "من بازنشسته هستم و تونستم خودم 199 میلیون اعتبار بدون ضامن از دیجی‌شهر بگیرم. با این مبلغ از فروشگاه دیجی‌شهر یک کولر گازی خریدم و یک لپ تاپ برای پسرم؛ همچنین دو گوشی و یک پنکه.",
        img: ShaterhoseiniTestimonial
    },
    {
        name: "آقای خداوردی پور",
        price: 200,
        description: "اعتبار دریافتی ظرف چند روز به حساب کاربری‌ام واریز شد و با اعتبار خرید کالا از دیجی‌شهر، برای خودم و خانواده‌ام چند گوشی موبایل خریداری کردم.",
        img: KhodaverdiTestimonial
    },
    {
        name: "خانم محمدی",
        price: 70,
        description: "همه چیز عالی بود، تنوع محصولات بسیار بالا بود و یخچالی که میخواستم رو با قیمت مناسب خریدم و سر وقت و سالم بدستم رسید.",
        img: MohammadiTestimonial
    },
    {
        name: "آقای اردکانی",
        price: 200,
        description: "خیلی خیلی خوب بود. من یک هفته‌ای تونستم اعتبار 200 میلیون تومانی 60 ماهه رو دریافت کنم و پاسخگویی تیم پشتیبانی عالی بود. با اعتبارم هم یه گوشی آیفون و یه گوشی سامسونگ خریدم.",
        img: ArdakaniTestimonial
    },
    {
        name: "خانم خدارحمی",
        price: 90,
        description: "نقطه قوت دیجی‌شهر، به نظرم تنوع محصولاتی بود که داشت و تونستم همه کالاهایی که نیاز دارم رو به راحتی خریداری کنم.",
        img: KhodarahmiTestimonial
    },
    {
        name: "آقای نیک پور",
        price: 185,
        description: "نکته قوتی که دیجی‌شهر داشت و نظرم رو جلب کرد تنوع محصولاتش بود و تونستم با 185 میلیون تومان اعتبار 60 ماهه‌ای که گرفتم موتورسیکلت خریداری کنم.",
        img: NikpoorTestimonial
    },
    {
        name: "آقای بنی جواد",
        price: 60,
        description: "60 تومن 60 ماهه گرفتم که واقعا عالی بود. سرعت پروسه کاری خیلی خوب بود و من تونستم 10 الی 15 روزه اعتبارم رو از دیجی‌شهر بگیرم و کالاهای مورد نظرم رو بخرم.",
        img: BanijavadTestimonial
    },
    {
        name: "آقای رومی",
        price: 200,
        description: "من 200 میلیون تومان 60 ماهه اعتبار گرفتم و برای همسرم هم درخواست اعتبار دادم. با این مبلغ برای بچه‌ها گوشی و لپ تاپ خریدیم و خیلی فوری اعتبار رو دریافت کردیم.",
        img: RoomiTestimonial
    },
]

// Article

export interface ArticlesListProps {
    title: string;
    description: string;
    img: StaticImageData;
}

export const ArticlesList: ArticlesListProps[] = [
    {    
        title: "نقد و بررسی موتور بنلی مدل TNT15 | مزایا و معایب",
        description: "اگر از عاشقان موتور سیکلت‌های قدرتمند و باکیفیت هستید، موتور سیکلت بنلی مدل TNT15 بهترین پیشنهاد به شماست. این موتور سیکلت با طراحی منحصربه‌فرد و قابلیت‌های جذاب، بسیاری از موتورسواران ...",
        img: BeneliCover
    },
    {    
        title: "خوش‌قیمت‌ترین لپ‌تاپ‌های لنوو در تابستان ۱۴۰۳",
        description: "دنبال لپ‌تاپ جدیدی هستید که هم قدرتمند باشد، هم تنوع مدل داشته باشد و هم قیمت مناسبی داشته باشد؟ لنوو، غول محبوب دنیای لپ‌تاپ‌ها، اینجاست تا به شما کمک کند! ...",
        img: LaptopCover
    },
    {    
        title: "با مضرات سرخ‌کن بدون روغن آشنا شوید!",
        description: "سرخ‌کن‌های بدون روغن با ظاهری مدرن به یکی از محبوب‌ترین لوازم آشپزخانه تبدیل شده‌اند. اما آیا واقعاً می‌توان با خیالی آسوده به این دستگاه‌ها اعتماد کرد و قید سرخ‌کن‌های سنتی ...",
        img: FryCover
    },
]

// Questions

export const QuestionsList = [
    {
        topic: "برای دریافت وام به چه مدارکی نیاز است؟",
        detail: "از جمله مدارکی که برای دریافت وام نیاز است شامل مدارک هویتی (تصاویر صفحات شناسنامه و تصویر کارت ملی یا تصویر رسید ثبت احوال)، مدارک سکونتی (سند یا اجاره‌نامه منزل) و مدارک شغلی که برای کارمندان شامل تصویر آخرین فیش حقوقی و معرفی‌نامه شغلی خطاب به بانک شهر و برای سایر افراد شامل تصویر جواز کسب یا کارت بازرگانی و اجاره‌نامه یا سند محل کار می‌شود. همچنین متقاضی دریافت وام آنلاین خرید کالا علاوه بر رتبه اعتباری، باید در بانک شهر حساب داشته باشد."
    },
    {
        topic: "مراحل دریافت وام خرید اعتباری چگونه است؟",
        detail:"۱.در سایت دیجی‌شهر ثبت‌نام کنید و اطلاعات شخصی و شغلی خود را ثبت کنید./n ۲.با توجه به اعتبارسنجی که انجام می‌دهید، میزان اعتبار و زمان بازپرداخت اقساط را انتخاب کنید. /n  ۳.مدارک هویتی، سکونتی و شغلی خود را بارگذاری کنید و وارد مرحله انتخاب شعبه‌ بانک شوید. "
    },
    {
        topic: "وام دیجی‌شهر به چه صورتی قابل استفاده است؟",
        detail: "وام شما بصورت اعتبار برای خرید کالا از فروشگاه آنلاین دیجی‌شهر قابل استفاده است. لینک سایت فروشگاه:" 
    },
    {
        topic: "سقف دریافت اعتبار چقدر است؟ ",
        detail: "میزان سقف دریافت وام به رتبه اعتباری، سابقه حساب بانکی و سوابق چک برگشتی بستگی دارد. متقاضیان دارای رتبه‌ اعتباری A می‌توانند بدون نیاز به ضامن و فقط با ارائه یک برگ چک، تا سقف ۱۲۰میلیون تومان وام کالا دریافت کنند. افراد دارای رتبه‌ اعتباری B، امکان دریافت وام با یک برگ چک تا سقف ۱۰۰میلیون تومان را دارند. رتبه‌‌های اعتباری A و B می‌توانند برای دریافت وام تا سقف ۲۰۰میلیون تومان، ۲ برگ چک (چک شخص + چک ضامن) یا یک گواهی کسر از حقوق را به‌عنوان ضمانت ارائه دهند. "
    },
]