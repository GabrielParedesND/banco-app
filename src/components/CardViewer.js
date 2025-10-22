'use client'

import { Navigation, Pagination, Scrollbar, A11y, EffectCards } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
// import 'swiper/css/navigation'
// import 'swiper/css/pagination'
// import 'swiper/css/scrollbar'
import 'swiper/css/effect-cards'
import Image from 'next/image'


function CardViewer() {
  return (
    <div className='h-[320px]'>
      <Swiper
        modules={[A11y, EffectCards]}
        spaceBetween={50}
        slidesPerView={3}
        grabCursor={true}
        effect={'cards'}
        cardsEffect={{
          slideShadows: false
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => console.log('slide change', swiper.activeIndex)}
      >
        <SwiperSlide>
          <Image
            className='w-full h-full'
            src='/assets/card2.png'
            width={1920}
            height={1080}
            alt="Card image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='w-full h-full'
            src='/assets/card2.png'
            width={1920}
            height={1080}
            alt="Card image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='w-full h-full'
            src='/assets/card2.png'
            width={1920}
            height={1080}
            alt="Card image"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            className='w-full h-full'
            src='/assets/card2.png'
            width={1920}
            height={1080}
            alt="Card image"
          />
        </SwiperSlide>
      </Swiper>
    </div>

  )
}

export default CardViewer