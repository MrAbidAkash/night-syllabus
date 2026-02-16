'use client'

import React, { useState, useEffect } from 'react'

export default function SectionOne({ page }: { page: any }) {
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
    <section id="about" className="py-12 md:py-24 px-4">
      <div className="max-w-6xl mx-auto text-black">
        {/* Headings */}
        <div className="text-center space-y-3 md:space-y-4">
          <h2 className="text-3xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            কেন <span className="text-red-600">&apos;মাস্টার লাভার&apos;</span> কোর্সে জয়েন করবেন?
          </h2>

          <h3 className="text-lg sm:text-xl md:text-3xl font-semibold text-gray-700">
            সাধারণ পুরুষ থেকে &apos;মাস্টার লাভার&apos; হওয়ার যাত্রা!
          </h3>

          <div className="w-16 md:w-24 h-1 bg-red-600 mx-auto rounded" />
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-10 md:mt-12">
          {/* Before Card */}
          <div className="bg-gray-50 rounded-xl p-5 md:p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-600 text-white flex items-center justify-center text-lg md:text-xl">
                ✕
              </div>
              <h4 className="text-xl sm:text-2xl md:text-4xl font-bold">কোর্স করার আগে</h4>
            </div>

            <ul className="space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
              <li>❌ ফোর’প্লে করেও স্ত্রীকে উত্তেজিত করতে না পারা!</li>
              <li>❌ স্ত্রী উত্তেজিত হওয়ার আগেই ‘গেম ওভার’!</li>
              <li>❌ দ্রুত বীর্যপাতের ফলে স্ত্রীর চোখে হতাশা!</li>
              <li>❌ মিলনকে আনন্দ নয়, বরং ‘প্রেসার’ মনে করা!</li>
              <li>❌ স্ত্রীর অতৃপ্তি ও ‘ফেইক অর্গাজম’ বুঝতে না পারা!</li>
            </ul>
          </div>

          {/* After Card */}
          <div className="bg-green-50 rounded-xl p-5 md:p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-600 text-white flex items-center justify-center text-lg md:text-xl">
                ✓
              </div>
              <h4 className="text-xl sm:text-2xl md:text-4xl font-bold">কোর্স করার পরে</h4>
            </div>

            <ul className="space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed">
              <li>✅ ‘১০ সেকেন্ড অর্গাজম’ ফর্মুলা</li>
              <li>✅ স্ত্রীকে পাগল করার ‘ফোর-প্লে’ টেকনিক</li>
              <li>✅ নন-স্টপ টাইমিং কন্ট্রোলের ক্ষমতা</li>
              <li>✅ ওরাল প্লেজার সম্পর্কিত সচেতনতা ও দক্ষতা</li>
              <li>✅ দীর্ঘস্থায়ী মিলন ও দ্রুত তৃপ্তি দেওয়ার কৌশল</li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 md:mt-12 space-y-3 md:space-y-4">
          <button
            onClick={handleBuyNow}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold transition-transform hover:scale-105 w-full sm:w-auto justify-center"
          >
            🚀 এখনই এনরোল করুন
          </button>

          <p className="text-gray-600 text-xs sm:text-sm md:text-base">
            (এই পরিবর্তন আপনার জীবনে নিয়ে আসতে এখনই কোর্সে এনরোল করুন)
          </p>
        </div>
      </div>
    </section>
  )
}
