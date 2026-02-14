'use client'
import { useState } from 'react'

const faqs = [
  {
    q: 'পেমেন্ট করার পর আমি কোর্সের অ্যাক্সেস কীভাবে পাবো?',
    a: 'পেমেন্ট করার পর ইনস্ট্যান্ট অটোমেটিক আপনার ইমেইলে কোর্সের অ্যাক্সেস চলে যাবে। সেখানে ক্লিক করলেই ভিডিও দেখা শুরু করতে পারবেন।',
  },
  {
    q: 'আমি কি কোর্সের ভিডিওগুলোর লাইফটাইম অ্যাক্সেস পাবো?',
    a: `জি, অবশ্যই!
একবার কোর্সটি কিনলে আপনি এর লাইফটাইম অ্যাক্সেস পাবেন।
আপনি যেকোনো সময়ে, যতবার খুশি ভিডিওগুলো দেখতে পারবেন।`,
  },
  {
    q: 'ক্লাসগুলো কি লাইভ হবে, নাকি প্রি-রেকর্ডেড ভিডিও?',
    a: 'এটি একটি রেকর্ডেড ভিডিও কোর্স। পেমেন্ট সম্পন্ন করার পর ইনস্ট্যান্ট কোর্সের লিংক পেয়ে যাবেন।',
  },
  {
    q: 'সম্পূর্ণ কোর্সটি কি বাংলা ভাষায় করানো হয়েছে?',
    a: 'জি, সম্পূর্ণ কোর্সটি খুব সহজ বাংলা ভাষায় করানো হয়েছে।',
  },
  {
    q: 'ইবুকগুলো কিভাবে পাবো?',
    a: 'পেমেন্ট করার পর কোর্সের ফোল্ডার থেকেই বোনাস ই-বুকগুলো ডাউনলোড করতে পারবেন।',
  },
]

export default function SectionSix() {
  const [open, setOpen] = useState(0)

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        {/* Heading */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-4xl font-bold">কোর্স সম্পর্কে তথ্য ও জিজ্ঞাসা</h2>
          <div className="h-1 w-24 bg-red-600 mx-auto rounded-full" />
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="border border-gray-700 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-lg hover:bg-gray-900 transition"
              >
                <span>{item.q}</span>
                <span className="text-2xl">{open === i ? '−' : '+'}</span>
              </button>

              <div
                className={`px-5 text-gray-300 overflow-hidden transition-all duration-300 ${
                  open === i ? 'max-h-96 pb-5' : 'max-h-0'
                }`}
              >
                <p className="whitespace-pre-line leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <a
            href="https://wa.me/8801798979578"
            className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-bold transition-transform hover:scale-105"
          >
            💬 যোগাযোগ করুন
          </a>

          <a
            href="https://nightsyllabus.com/checkout-how-to-satisfy-a-woman-in-bed-course/"
            className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full font-bold transition-transform hover:scale-105"
          >
            🚀 এখনই এনরোল করুন
          </a>
        </div>
      </div>
    </section>
  )
}
