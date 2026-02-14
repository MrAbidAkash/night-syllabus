'use client'

import React, { useState, useEffect } from 'react'
import LearnerReviews from './LearnerReviews'

export default function SectionTwo({ page }: { page: any }) {
  return (
    <section id="features" className="py-16 md:py-24">
      <LearnerReviews />
    </section>
  )
}
