'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export default function LearnerReviews() {
  const images = [
    'https://nightsyllabus.com/wp-content/uploads/2026/01/rmlc-1.webp',
    'https://nightsyllabus.com/wp-content/uploads/2026/01/rmlc-2.webp',
    'https://nightsyllabus.com/wp-content/uploads/2026/01/rmlc-3.webp',
    'https://nightsyllabus.com/wp-content/uploads/2026/01/rmlc-4.webp',
    'https://nightsyllabus.com/wp-content/uploads/2026/01/rmlc-5.webp',
  ]

  const handleBuyNow = () => {
    const el = document.getElementById('checkout')
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <section className="py-1 md:py-20 px-4">
      <div className="max-w-7xl mx-auto text-center space-y-4 md:space-y-6">
        {/* Headings */}
        <h2 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
          <span className="text-red-600">৪,৫০০+ লার্নার</span> কি বলছে?
        </h2>

        <h3 className="text-sm sm:text-base md:text-2xl text-gray-700">
          আমাদের ইনবক্স ও কমেন্ট থেকে স্যাটিসফাইড লার্নারদের কিছু রিভিউ:
        </h3>

        {/* Divider */}
        <div className="w-16 md:w-24 h-1 bg-red-600 mx-auto rounded" />

        {/* Carousel */}
        <div className="mt-8 md:mt-10">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2600, disableOnInteraction: false }}
            loop
            slidesPerView={1} // default = mobile
            spaceBetween={16}
            breakpoints={{
              0: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 4 },
            }}
          >
            {images.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300 max-md:px-5">
                  <div className="aspect-[4/5]">
                    <img
                      src={src}
                      alt={`Learner review ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA */}
        <div className="pt-8 md:pt-10 space-y-3 md:space-y-4">
          <button
            onClick={handleBuyNow}
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-transform hover:scale-105 w-full sm:w-auto"
          >
            🚀 এখনই এনরোল করুন
          </button>

          <h4 className="text-sm md:text-lg font-semibold text-gray-800">
            ⚠️ এই কোর্সটি শুধুমাত্র প্রাপ্তবয়স্কদের জন্য! ⚠️
          </h4>
        </div>
      </div>
    </section>
  )
}
