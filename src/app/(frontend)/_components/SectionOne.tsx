'use client'

import React, { useState, useEffect } from 'react'

export default function SectionOne({ page }: { page: any }) {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="">
        <div className="max-w-6xl mx-auto text-black">
          {/* Headings */}
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              কেন <span className="text-red-600">&apos;মাস্টার লাভার&apos;</span> কোর্সে জয়েন করবেন?
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
              সাধারণ পুরুষ থেকে &apos;মাস্টার লাভার&apos; হওয়ার যাত্রা!
            </h3>

            <div className="w-24 h-1 bg-red-600 mx-auto rounded" />
          </div>

          {/* Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {/* Before */}
            <div className="bg-gray-50 rounded-xl p-6 shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center text-xl">
                  ✕
                </div>
                <h4 className="text-xl font-bold">কোর্স করার আগে</h4>
              </div>

              <ul className="space-y-4 text-gray-700">
                <li className="flex gap-3">❌ ফোর’প্লে করেও স্ত্রীকে উত্তেজিত করতে না পারা!</li>
                <li className="flex gap-3">❌ স্ত্রী উত্তেজিত হওয়ার আগেই ‘গেম ওভার’!</li>
                <li className="flex gap-3">❌ দ্রুত বীর্যপাতের ফলে স্ত্রীর চোখে হতাশা!</li>
                <li className="flex gap-3">❌ মিলনকে আনন্দ নয়, বরং ‘প্রেসার’ মনে করা!</li>
                <li className="flex gap-3">❌ স্ত্রীর অতৃপ্তি ও ‘ফেইক অর্গাজম’ বুঝতে না পারা!</li>
              </ul>
            </div>

            {/* After */}
            <div className="bg-green-50 rounded-xl p-6 shadow">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center text-xl">
                  ✓
                </div>
                <h4 className="text-xl font-bold">কোর্স করার পরে</h4>
              </div>

              <ul className="space-y-4 text-gray-800">
                <li className="flex gap-3">✅ ‘১০ সেকেন্ড অর্গাজম’ ফর্মুলা</li>
                <li className="flex gap-3">✅ স্ত্রীকে পাগল করার ‘ফোর-প্লে’ টেকনিক</li>
                <li className="flex gap-3">✅ নন-স্টপ সেক্স ও টাইমিং কন্ট্রোল করার ক্ষমতা</li>
                <li className="flex gap-3">✅ ওরাল প্লেজার ও ডার্টি সেক্সের গোপন টেকনিক</li>
                <li className="flex gap-3">✅ দীর্ঘস্থায়ী মিলন ও দ্রুত তৃপ্তি দেওয়ার কৌশল</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12 space-y-4">
            <button
              onClick={() =>
                (window.location.href =
                  'https://nightsyllabus.com/checkout-how-to-satisfy-a-woman-in-bed-course/')
              }
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-transform hover:scale-105"
            >
              🚀 এখনই এনরোল করুন
            </button>

            <p className="text-gray-600 text-sm md:text-base">
              (এই পরিবর্তন আপনার জীবনে নিয়ে আসতে এখনই কোর্সে এনরোল করুন)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
