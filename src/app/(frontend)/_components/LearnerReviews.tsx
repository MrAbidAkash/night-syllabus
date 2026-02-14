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

  return (
    <section className="">
      <div className="max-w-7xl mx-auto text-center space-y-6">
        {/* Headings */}
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-red-600">৪,৫০০+ লার্নার</span> কি বলছে?
        </h2>

        <h3 className="text-lg md:text-xl text-gray-700">
          আমাদের ইনবক্স ও কমেন্ট থেকে স্যাটিসফাইড লার্নারদের কিছু রিভিউ:
        </h3>

        {/* Divider */}
        <div className="w-24 h-1 bg-red-600 mx-auto rounded" />

        {/* Carousel */}
        <div className="mt-10">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2600, disableOnInteraction: false }}
            loop
            spaceBetween={12}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
          >
            {images.map((src, i) => (
              <SwiperSlide key={i}>
                <div className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
                  <img
                    src={src}
                    alt={`Learner review ${i + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA */}
        <div className="pt-10 space-y-4">
          <a
            href="https://nightsyllabus.com/checkout-how-to-satisfy-a-woman-in-bed-course/"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-transform hover:scale-105"
          >
            🚀 এখনই এনরোল করুন
          </a>

          <h4 className="text-lg font-semibold text-gray-800">
            ⚠️ এই কোর্সটি শুধুমাত্র প্রাপ্তবয়স্কদের জন্য! ⚠️
          </h4>
        </div>
      </div>
    </section>
  )
}
