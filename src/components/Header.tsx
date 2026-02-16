'use client'

import Link from 'next/link'

// components/Header.tsx
export default function Header() {
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
    <div className="border-b border-primary">
      <header className="flex max-sm:flex-col max-sm:gap-6 items-center justify-between px-6 py-5  -sm  max-w-7xl mx-auto">
        <div
          className="elementor-element elementor-element-46825f1 elementor-widget elementor-widget-theme-site-logo elementor-widget-image"
          data-id="46825f1"
          data-element_type="widget"
          data-e-type="widget"
          data-widget_type="theme-site-logo.default"
        >
          <div onClick={handleBuyNow} style={{ cursor: 'pointer' }}>
            <div
              role="img"
              aria-label="Site Logo"
              className="md:w-[128px] md:h-[47px] w-[180px] h-[70px]"
              style={{
                backgroundImage:
                  'url(https://nightsyllabus.com/wp-content/uploads/2026/01/Site-Logo.png)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            />
          </div>
        </div>

        <div className="hidden md:flex ">
          <div className="flex gap-7">
            <div className="e-n-menu-item">
              <div
                className="e-n-menu-title e-anchor"
                onClick={() => document.getElementById('module')?.scrollIntoView()}
                style={{ cursor: 'pointer' }}
              >
                <div className="e-n-menu-title-text">Course Modules</div>
              </div>
            </div>

            <div className="e-n-menu-item">
              <div
                className="e-n-menu-title e-anchor"
                onClick={() => document.getElementById('benefits')?.scrollIntoView()}
                style={{ cursor: 'pointer' }}
              >
                <div className="e-n-menu-title-text">Benefits</div>
              </div>
            </div>

            <div className="e-n-menu-item">
              <div
                className="e-n-menu-title e-anchor"
                onClick={() => document.getElementById('reviews')?.scrollIntoView()}
                style={{ cursor: 'pointer' }}
              >
                <div className="e-n-menu-title-text">Reviews</div>
              </div>
            </div>

            <div className="e-n-menu-item">
              <div
                className="e-n-menu-title e-anchor"
                onClick={() => document.getElementById('offer')?.scrollIntoView()}
                style={{ cursor: 'pointer' }}
              >
                <div className="e-n-menu-title-text">Special Offer</div>
              </div>
            </div>
          </div>
        </div>

        <div className="elementor-element elementor-element-9c10d34 elementor-mobile-align-right elementor-widget elementor-widget-button">
          <div
            className="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow"
            onClick={handleBuyNow}
            style={{ cursor: 'pointer' }}
          >
            <button className="bg-primary text-white px-4 py-2 rounded-lg">Enroll Now</button>
          </div>
        </div>
      </header>
    </div>
  )
}
