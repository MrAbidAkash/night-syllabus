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
    <section className="py-6 w-full">
      <div className="w-full flex flex-col items-center justify-center">
        {/* Heading 1 */}
        <div
          className="elementor-element elementor-element-1994505 elementor-widget elementor-widget-heading"
          data-id="1994505"
        >
          <div className="elementor-heading-title elementor-size-default">
            ✨ 4,500+ Satisfied Learners ✨
          </div>
        </div>

        {/* Heading 2 */}
        <div
          className="elementor-element elementor-element-1364672 elementor-widget-mobile__width-initial elementor-widget elementor-widget-heading"
          data-id="1364672"
        >
          <div className="elementor-heading-title elementor-size-default">
            বিছানায় আপনার স্ত্রীকে কি <br />
            <span style={{ color: '#FF0000' }}>সত্যিই তৃপ্তি দিতে পারছেন?</span>
          </div>
        </div>

        {/* Heading 3 */}
        <div
          className="elementor-element elementor-element-5216b81 elementor-widget__width-initial elementor-widget elementor-widget-heading"
          data-id="5216b81"
        >
          <div className="elementor-heading-title elementor-size-default">
            ৯০% পুরুষ জানেই না, কিভাবে নারীর শরীরকে উত্তেজিত করতে হয়!
            <br />
            <b>
              <span style={{ color: '#FF0000' }}>
                কিন্তু একজন &apos;মাস্টার লাভার&apos; জানে কীভাবে নারীর শরীরের প্রতিটি ইঞ্চিতে শিহরণ
                জাগাতে হয়!
              </span>
            </b>
          </div>
        </div>

        {/* Video Section */}
        <div
          className="elementor-element elementor-element-829cec1 elementor-widget elementor-widget-video"
          data-id="829cec1"
        >
          <div className="w-6xl max-w-4xl mx-auto">
            <div className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer">
              {/* Thumbnail */}
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-300 group-hover:scale-105"
                style={{
                  backgroundImage:
                    'url(https://nightsyllabus.com/wp-content/uploads/2026/01/Thumbnail-Master-Lover.webp)',
                }}
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors" />

              {/* Play Button */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                onClick={() => window.open('https://youtu.be/abzpfDXtXPE', '_blank')}
              >
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-red-600 flex items-center justify-center shadow-xl scale-100 group-hover:scale-110 transition-transform">
                  <div className="text-white text-3xl md:text-4xl ml-1">▶</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons Container */}
        <div
          className=""
          data-id="74edddc"
        >
          {/* Module Button */}
          <div
            className="elementor-element elementor-element-e6e30c2 elementor-widget elementor-widget-button"
            data-id="e6e30c2"
          >
            <div
              className="elementor-button elementor-size-sm elementor-animation-grow"
              style={{ cursor: 'pointer' }}
              onClick={() =>
                document.getElementById('module')?.scrollIntoView({
                  behavior: 'smooth',
                })
              }
            >
              <div className="elementor-button-content-wrapper">
                <div className="elementor-button-text">কোর্সের মডিউল দেখুন</div>
              </div>
            </div>
          </div>

          {/* Enroll Button */}
          <div
            className="elementor-element elementor-element-f8aa14d elementor-widget elementor-widget-button"
            data-id="f8aa14d"
          >
            <div
              className="elementor-button elementor-size-sm elementor-animation-grow"
              style={{ cursor: 'pointer' }}
              onClick={() =>
                (window.location.href =
                  'https://nightsyllabus.com/checkout-how-to-satisfy-a-woman-in-bed-course/')
              }
            >
              <div className="elementor-button-content-wrapper">
                <div className="elementor-button-icon">🚀</div>
                <div className="elementor-button-text">এখনই এনরোল করুন</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
