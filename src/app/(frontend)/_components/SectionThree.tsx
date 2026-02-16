'use client'

import React, { useState, useEffect } from 'react'

export default function SectionThree({ page }: { page: any }) {
  const bdPrice = page?.pricing?.[0]?.bdPrice
  // console.log(bdPrice)
  const handleBuyNow = () => {
    const el = document.getElementById('checkout')
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }
  const items = [
    {
      icon: '♚',
      text: 'বিছানায় আপনার সঙ্গীর শারীরিক ও মানসিক তৃপ্তির কারণ!',
    },
    {
      icon: '❤',
      text: 'যিনি জানেন কীভাবে পেনিট্রেশন ছাড়াই মাত্র ২০ সেকেন্ডে অর্গাজম করতে হয়!',
    },
    {
      icon: '🛡',
      text: "আপনার সঙ্গীর কাছে একজন 'মাইন্ডফুল লাভ মেকার' এবং 'মাস্টার লাভার'!",
    },
    {
      icon: '💎',
      text: 'যিনি সম্পর্কের একঘেয়েমি কাটিয়ে প্রতিদিন রোমাঞ্চকর নতুনত্ব যোগ করতে সক্ষম!',
    },
    {
      icon: '⚡',
      text: 'বিছানায় একজন আত্মবিশ্বাসী ও দক্ষ পুরুষ, যার কাছে সাইজ নয়, টেকনিকই আসল!',
    },
  ]

  return (
    <section className="py-16 px-5 bg-gray-50 text-black">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Headings */}
        <div className="flex justify-center">
          <h2 className="text-lg md:text-lg font-bold text-center p-2 px-6 rounded-full border-primary border">
            How This Course Will Transform You?
          </h2>
        </div>

        <h3 className="text-xl md:text-6xl font-bold text-center">
          এই কোর্সের মাধ্যমে <span className="text-red-600">আপনিও হবেন,</span>
        </h3>

        {/* List */}
        <ul className="space-y-8 pt-6">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-4 text-3xl font-semibold">
              <span className="text-2xl md:text-5xl text-red-600">{item.icon}</span>
              <p className="text-base md:text-3xl text-gray-800">{item.text}</p>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 my-10" />

        {/* Pricing */}
        <h3 className="text-xl md:text-2xl font-semibold text-center">
          কোর্সের রেগুলার ফি <span className="text-red-600 line-through">৯,৬৬০ টাকা</span>;
          <br className="md:hidden" /> আজকের জন্য মাত্র{' '}
          <span className="text-red-600 font-bold">১২৫০ টাকা!</span>
        </h3>

        {/* CTA */}
        <div className="text-center pt-6 space-y-4">
          <button
            onClick={handleBuyNow}
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-transform hover:scale-105"
          >
            🚀 এখনই এনরোল করুন
          </button>

          <p className="text-lg font-semibold text-gray-800">
            এই অফার শুধুমাত্র সীমিত সময়ের জন্য!
          </p>
        </div>
      </div>
    </section>
  )
}
