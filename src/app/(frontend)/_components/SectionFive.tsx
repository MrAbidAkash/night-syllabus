'use client'
import { useEffect, useState } from 'react'

function Countdown({ duration = 5 * 3600 + 22 * 60 + 42 }) {
  const [time, setTime] = useState(duration)

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((t) => (t > 0 ? t - 1 : 0))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const h = String(Math.floor(time / 3600)).padStart(2, '0')
  const m = String(Math.floor((time % 3600) / 60)).padStart(2, '0')
  const s = String(time % 60).padStart(2, '0')

  return (
    <div className="flex gap-2 text-2xl font-bold text-red-600">
      <span>{h}</span>:<span>{m}</span>:<span>{s}</span>
    </div>
  )
}

export default function SectionFive() {
  const items = [
    { title: 'মাস্টার লাভার কোর্স', old: '৳৫,০০০', new: '৳৩,০০০', icon: '🎓' },
    { title: 'দ্য আর্ট অফ ফোরপ্লে – ইবুক', old: '৳৩৮০', new: 'ফ্রি', icon: '📘' },
    { title: 'বিবাহ প্রস্তুতি – ইবুক', old: '৳২৮০', new: 'ফ্রি', icon: '📘' },
    { title: 'VIP কমিউনিটি মেম্বারশিপ (লাইফটাইম)', old: '৳৬,০০০', new: 'ফ্রি', icon: '💎' },
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
    <section className="bg-transparent md:border border-primary text-white py-10 md:py-16 px-4 w-full">
      <div className="md:max-w-5xl mx-auto space-y-8 md:space-y-10 text-base sm:text-lg md:text-xl font-bold">
        {/* Countdown */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-6 px-2 text-center sm:text-left max-sm:text-xl">
          <div className="flex items-center justify-center sm:justify-start gap-2 font-semibold">
            ⏱ <span>অফার শেষ হতে বাকি:</span>
          </div>
          <div className="flex justify-center sm:justify-end">
            <Countdown />
          </div>
        </div>

        {/* Offer Items */}
        <div className="space-y-4 md:space-y-5">
          {items.map((item, i) => (
            <div
              key={i}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-gray-900 rounded-xl p-4 md:p-5"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl md:text-3xl">{item.icon}</span>
                <h3 className="font-semibold text-sm sm:text-base md:text-lg">{item.title}</h3>
              </div>

              <p className="text-left sm:text-right text-sm sm:text-base">
                <span className="line-through text-gray-400 mr-2">{item.old}</span>
                <span className="text-red-500 font-bold">{item.new}</span>
              </p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-700" />

        {/* Total Value */}
        <p className="text-center line-through text-gray-400 text-sm md:text-lg">
          সর্বমোট ভ্যালু: ৯,৬৬০ টাকা
        </p>

        {/* Big Price */}
        <div className="flex justify-center items-end gap-2 md:gap-3 flex-wrap">
          <span className="text-red-600 text-lg md:text-2xl font-bold">মাত্র</span>
          <span className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-none">১২৫০</span>
          <span className="text-lg md:text-2xl font-semibold">টাকা</span>
        </div>

        {/* CTA */}
        <div className="text-center pt-4 md:pt-6">
          <button
            onClick={handleBuyNow}
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 px-6 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-bold transition-transform hover:scale-105 w-full sm:w-auto"
          >
            🚀 অফারটি নিতে চাই!
          </button>
        </div>
      </div>
    </section>
  )
}
