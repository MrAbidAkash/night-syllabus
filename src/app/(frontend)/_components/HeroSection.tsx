'use client'

import React, { useState, useEffect } from 'react'
import CountDownTimer from './CountDownTimer'

export default function HeroSection({ page }: { page: any }) {
  const bdPrice = page?.pricing?.[0]?.bdPrice

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
    <section className="py-10 md:py-14 px-4">
      <div className="w-full flex flex-col gap-6 items-center justify-center">
        {/* Heading 1 */}
        <div className="p-2 md:p-3 border-primary border-2 rounded-full text-center">
          <span className="text-sm md:text-base">✨ 4,500+ Satisfied Learners ✨</span>
        </div>

        {/* Heading 2 */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            বিছানায় আপনার স্ত্রীকে কি <br />
            <span className="text-red-600">সত্যিই তৃপ্তি দিতে পারছেন?</span>
          </h1>
        </div>

        {/* Heading 3 */}
        <div className="text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed">
            ৯০% পুরুষ জানেই না, কিভাবে নারীর শরীরকে উত্তেজিত করতে হয়!
            <br />
            <span className="text-red-600">
              কিন্তু একজন &apos;মাস্টার লাভার&apos; জানে কীভাবে নারীর শরীরের প্রতিটি ইঞ্চিতে শিহরণ জাগাতে হয়!
            </span>
          </p>
        </div>

        {/* Video Section */}
        <div className="border-2 border-white rounded-md w-full max-w-4xl">
          <div className="w-full">
            <iframe
              className="w-full aspect-video rounded-md"
              src="https://www.youtube.com/embed/abzpfDXtXPE"
              title="YouTube video player"
              allowFullScreen
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center text-lg md:text-2xl mt-4 w-full sm:w-auto">
          {/* Module Button */}
          <button
            onClick={() =>
              document.getElementById('module')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
            className="bg-white text-black font-bold px-6 py-3 rounded-full w-full sm:w-auto hover:scale-105 transition"
          >
            কোর্সের মডিউল দেখুন
          </button>

          {/* Enroll Button */}
          <button
            onClick={handleBuyNow}
            className="bg-primary text-white font-bold px-6 py-3 rounded-full w-full sm:w-auto flex items-center justify-center gap-2 hover:scale-105 transition"
          >
            🚀 এখনই এনরোল করুন
          </button>
        </div>
      </div>
    </section>
  )
}
